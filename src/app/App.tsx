import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export default function App() {
    const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
}
