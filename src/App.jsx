import React from "react";
import { Toaster } from "sonner";
import DataTable from "./DataTable";

const App = () => {
  return (
    <div className="min-h-screen mx-auto">
      <Toaster />
      <DataTable />
    </div>
  );
};

export default App;
