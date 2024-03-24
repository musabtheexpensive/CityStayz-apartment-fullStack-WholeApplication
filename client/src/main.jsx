import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </NextUIProvider>
);
