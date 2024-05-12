import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import {AppRouter} from "app/providers/router";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Home page</Link>
      <Link to={"/about"}>About page</Link>
        <AppRouter />
    </div>
  );
}
