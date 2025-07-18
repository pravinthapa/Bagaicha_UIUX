import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useUserData } from "@/hooks/useQueryData";
import Header from "@/components/Header";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { data } = useUserData();
  console.log(data);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl border border-green-100 p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            My Profile
          </h2>

          {data ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-center  items-center gap-2">
                <p className="text-gray-600 font-medium"> Name:</p>
                <p className="text-lg font-semibold text-right">
                  {data.first_name}
                  {data.last_name}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center  items-center gap-2">
                <p className="text-gray-600 font-medium">Email:</p>
                <p className="text-lg font-semibold text-right">{data.email}</p>
              </div>

              {/* Add more fields if available */}
              {/* 
            <div className="flex flex-col sm:flex-row justify-between">
            <p className="text-gray-600 font-medium">📱 Phone:</p>
            <p className="text-lg font-semibold text-right">{data.phone}</p>
            </div> 
            */}

              <div className="flex justify-center gap-4 pt-6">
                <Button
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => alert("Edit Profile Coming Soon")}
                >
                  Edit Profile
                </Button>

                <Button
                  variant="destructive"
                  className="px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading user data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
