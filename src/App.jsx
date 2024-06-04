import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;