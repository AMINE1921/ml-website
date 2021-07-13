import React from "react";
import { NavLink } from "react-router-dom";
import { isCurrentUrl, handleCollapse } from "./utils";
import ml_logo from "../../media/ml.png";
import Languages from "../Languages";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <div className="navBar">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="navbar-brand name-logo">
                <div className="logo">
                  <NavLink exact to="/">
                    <span
                      className="logo-img"
                      style={{ backgroundImage: `url(${ml_logo})` }}
                    >
                      {" "}
                    </span>
                    Mohamed Lamine OUBAYA
                  </NavLink>
                </div>
              </div>
              <div class="rightSide">
                <Languages />
                <div
                  className="js-nav-toggle nav-toggle"
                  onClick={handleCollapse.bind(this)}
                >
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav id="main-nav" role="navigation">
        <div className="col-table">
          <div className="col-table-cell" onClick={handleCollapse.bind(this)}>
            <div className="row no-gutters">
              <div className="col-md-12 text-center">
                <ul>
                  <li
                    className={`${isCurrentUrl("#/") ? "active" : ""}`}
                    onClick={!handleCollapse.bind(this)}
                  >
                    <NavLink exact to="/">
                      <span>
                        <small>01</small>{t("home")}
                      </span>
                    </NavLink>
                  </li>
                  <li
                    className={`${isCurrentUrl("#/about") ? "active" : ""}`}
                    onClick={!handleCollapse.bind(this)}
                  >
                    <NavLink exact to="/about">
                      <span>
                        <small>02</small>{t("about")}
                      </span>
                    </NavLink>
                  </li>
                  <li
                    className={`${
                      isCurrentUrl("#/competences") ? "active" : ""
                    }`}
                    onClick={!handleCollapse.bind(this)}
                  >
                    <NavLink exact to="/competences">
                      <span>
                        <small>03</small>{t("skills")}
                      </span>
                    </NavLink>
                  </li>
                  <li
                    className={`${isCurrentUrl("#/portfolio") ? "active" : ""}`}
                    onClick={!handleCollapse.bind(this)}
                  >
                    <NavLink exact to="/portfolio">
                      <span>
                        <small>04</small>{t("portfolio")}
                      </span>
                    </NavLink>
                  </li>
                  <li
                    className={`${isCurrentUrl("#/contact") ? "active" : ""}`}
                    onClick={!handleCollapse.bind(this)}
                  >
                    <NavLink exact to="/contact">
                      <span>
                        <small>05</small>{t("contact")}
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
