import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";
import MovieSearch from "./components/MovieSearch";
import MoviesRows from "./components/MoviesRows";
import Navbar from "./components/Navbar";
import LoginWithOTP from "./components/LoginWithOTP";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MyAccount from "./components/MyAccount";
import MovieDetail from "./components/MovieDetail";

function App() {
  const { isLoggedin } = useSelector((state) => state.customReducer);

  return (
    <div className="w-full h-full">
      {isLoggedin ? <Navbar className="fixed" /> : <></>}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/LoginOTP" element={<LoginWithOTP />}></Route>
        <Route path="/home/moviesSearch" element={<MovieSearch />} />
        <Route path="/home/moviesRows" element={<MoviesRows />} />
        {/* <Route path="/home/moviesdetail" element={<MovieDetail />} /> */}
        <Route path="/home/myAccount" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
