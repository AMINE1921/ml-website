import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { useIsMount } from "../utils/useIsMount";
import { Dropdown } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const { t } = useTranslation();
  const isMount = useIsMount();
  let selected = localStorage.getItem("i18nextLng") || "fr";
  const [countryCode, changeCountryCode] = useState("FR");
  const handleClick = (lang) => {
    i18next.changeLanguage(lang);
  };

  useEffect(() => {
    if (isMount) {
      changeCountryFlag();
    } else {
      changeCountryFlag();
    }
  }, [selected]);

  const changeCountryFlag = () => {
    if (selected === "fr") {
      changeCountryCode("FR");
    }
    if (selected === "en") {
      changeCountryCode("GB");
    }
  };

  return (
    <Dropdown id="langSelect">
      <Dropdown.Toggle id="dropdown-basic">
        <ReactCountryFlag countryCode={countryCode} svg />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleClick("fr")}>
          <ReactCountryFlag countryCode="FR" svg /> {t("fr")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("en")}>
          <ReactCountryFlag countryCode="GB" svg /> {t("en")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Languages;
