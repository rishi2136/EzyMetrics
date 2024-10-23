import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Report from "./pages/Report.jsx";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Campaign from "./pages/Campaigns.jsx";
import Leads from "./pages/Leads.jsx";
import AddCampaign from "./components/AddCampaign.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Campaign />,
      },
      {
        path: "lead",
        element: <Leads />,
      },
      // {
      //   path: "new/lead",
      //   element: <Generate />,
      // },
      {
        path: "new/campaign",
        element: <AddCampaign />,
      },
     
    ],
  },
  {
    path: "/report",
    element: <Report />,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
