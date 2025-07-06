import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Leaf, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useLoginMutation } from "@/hooks/useMutateData";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginMutation = useLoginMutation();
  const { setUser } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      email: email,
      password: password,
    };

    loginMutation.mutateAsync(["post", "", payload], {
      onSuccess: (response) => {
        toast.custom(
          (t) => (
            <div
              className="bg-green-600 text-white px-4 py-6 rounded-md shadow-lg w-full max-w-sm"
              style={{ marginBottom: "0.75rem" }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Logged in successfully!
                </span>
                <button
                  onClick={() => toast.dismiss(t)}
                  className="ml-8 text-xl leading-none hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            </div>
          ),
          { duration: 5000, position: "top-right" }
        );

        setUser({
          refresh: response?.refresh,
          token: response?.access,
          user: response?.user,
        });
        setIsLoading(false);
        navigate("/home");
      },
      onError: () => {
        toast.custom(
          (t) => (
            <div
              className="bg-red-600 text-white px-4 py-3 rounded-md shadow-lg w-full max-w-sm"
              style={{ marginBottom: "0.75rem" }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Login failed! Please check your credentials.
                </span>
                <button
                  onClick={() => toast.dismiss(t)}
                  className="ml-4 text-xl leading-none hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            </div>
          ),
          { duration: 5000, position: "top-right" }
        );

        setIsLoading(false);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`floating-leaf leaf-${i + 1}`}>
            <Leaf
              className={`w-${4 + i} h-${4 + i} text-green-400 opacity-${
                30 + i * 10
              }`}
            />
          </div>
        ))}
      </div>

      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-fade-in">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Sign in to your bagaicha account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-green-600" />
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Lock className="w-4 h-4 mr-2 text-green-600" />
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 pr-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-12 px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/register"
                className="text-sm text-green-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold text-lg shadow-lg hover:scale-105 disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-green-600 hover:underline font-semibold"
              >
                Create Account
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;

