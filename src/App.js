import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";

const App = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("title_home");
    document.description = t("description_home");
  });
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/competences" component={Knowledges} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
      <ToastContainer />
    </>
  );
};

export default App;
