// import logo from './logo.svg';
import "./App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RecommeandedVideo from "./RecommeandedVideo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import SearchVideo from "./SearchVideo";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchVideo />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommeandedVideo />
              </div>
            }
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
