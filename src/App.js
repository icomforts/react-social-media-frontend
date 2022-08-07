import "./App.scss";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "./store/slice/Auth";
import Chat from "./pages/Chat/Chat";

function App() {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={isLoggedIn ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={isLoggedIn ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="/chat"
          element={isLoggedIn ? <Chat /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
