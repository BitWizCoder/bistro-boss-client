import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoute/MainLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>
    },
  ]);