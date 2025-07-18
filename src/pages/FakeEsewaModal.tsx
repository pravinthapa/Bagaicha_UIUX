import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: (refId: string) => void;
  amount: number;
  productId: string;
  merchantNumber: string; // ✅ Add merchant number (your eSewa ID)
}

const FakeEsewaModal: React.FC<Props> = ({
  open,
  onClose,
  onConfirm,
  amount,
  productId,
  merchantNumber,
}) => {
  const [isPaying, setIsPaying] = useState(false);

  const handleFakePayment = () => {
    setIsPaying(true);
    const fakeRef = "TRX" + Math.floor(100000000 + Math.random() * 900000000);
    setTimeout(() => {
      setIsPaying(false);
      onConfirm(fakeRef);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white shadow-lg rounded-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-green-700 text-lg">
            eSewa Payment Simulation
          </DialogTitle>
        </DialogHeader>

        <div className="text-sm text-gray-600 mb-4">
          This is a static eSewa simulation for your project presentation.
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Amount</label>
            <Input value={`Rs ${amount.toFixed(2)}`} readOnly />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Merchant eSewa ID
            </label>
            <Input value={merchantNumber} readOnly />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Product ID
            </label>
            <Input value={productId} readOnly />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Return URL
            </label>
            <Input
              value="https://yourproject.com/orders (simulated)"
              readOnly
            />
          </div>

          <div className="text-sm text-gray-700 p-3 bg-green-50 border border-green-200 rounded-md">
            Please send{" "}
            <span className="font-semibold">Rs {amount.toFixed(2)}</span> to{" "}
            <span className="font-semibold text-green-700">
              {merchantNumber}
            </span>{" "}
            using your eSewa app. <br />
            After completing the payment, click the button below to simulate
            confirmation.
          </div>

          <Button
            disabled={isPaying}
            onClick={handleFakePayment}
            className="w-full bg-green-600 hover:bg-green-700 text-white mt-2"
          >
            {isPaying ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                Processing...
              </div>
            ) : (
              "Simulate eSewa Payment"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FakeEsewaModal;
