import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FakeEsewaModal = ({ open, onClose, onConfirm }) => {
  const [refId, setRefId] = useState("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-green-600">
            eSewa Payment Simulation
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Enter your eSewa reference ID (you can enter any number to
            simulate):
          </p>
          <Input
            placeholder="e.g. TXN12345678"
            value={refId}
            onChange={(e) => setRefId(e.target.value)}
            required
          />
        </div>
        <DialogFooter className="pt-4">
          <Button
            className="w-full bg-green-600 text-white"
            onClick={() => {
              if (refId.trim()) {
                onConfirm(refId);
              }
            }}
          >
            Confirm Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FakeEsewaModal;
