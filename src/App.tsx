import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export default function App() {

  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={classNames('app', { }, [ ])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Home page</Link>
      <Link to={"/about"}>About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
