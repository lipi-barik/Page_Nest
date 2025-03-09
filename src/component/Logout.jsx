import React from "react";
import { useAuth } from "../Auth/Authprovider";

function Logout() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="bg-orange-300 rounded-md px-3 py-1 mt-6 mr-2 hover:bg-amber-600"
    >
      Logout
    </button>
  );
}

export default Logout;