import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 py-6 bg-white shadow rounded-md border">
      <h2 className="text-2xl font-bold text-green-700 mb-6">My Profile</h2>

      {user ? (
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Name:</p>
            <p className="text-lg font-semibold">{user.name}</p>
          </div>

          <div>
            <p className="text-gray-600">Email:</p>
            <p className="text-lg font-semibold">{user.email}</p>
          </div>

          {/* Additional fields if you store more */}
          {/* 
          <div>
            <p className="text-gray-600">Phone:</p>
            <p className="text-lg font-semibold">{user.phone}</p>
          </div> 
          */}

          <div className="flex space-x-4 pt-4">
            <Button onClick={() => alert("Edit Profile Coming Soon")}>
              Edit Profile
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
