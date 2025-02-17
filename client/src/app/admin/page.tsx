import React from "react";
import { AdminPage } from "../../features/admin-panel/ui/admin-page/AdminPage";
import ProtectedRoute from "../../entities/ProtectedRoute/ProtectedRoute";

const Admin = () => {
  return (
    <ProtectedRoute>
      <AdminPage />
    </ProtectedRoute>
  );
};

export default Admin;
