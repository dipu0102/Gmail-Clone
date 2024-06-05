import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./components/NotFound";
import SendMail from "./components/SendMail";
import Login from "./components/Login";
import { setAuthUser } from "./redux/appSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
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
  const { authUser } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setAuthUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <>
      <div className="bg-[#F6F8FC] w-screen h-screen overflow-hidden">
        {!authUser ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <RouterProvider router={router} />
            <div className="absolute w-[30%] bottom-0 right-20 z-10">
              <SendMail />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
