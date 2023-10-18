import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Carousel } from "react-bootstrap";
import Navigation from "../components/Navigation/Navigation";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    anime({
      targets: ".item .text",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1500,
      delay: (el, i) => 30 * i,
    });
  }, []);

  return (
    <div>
      <Navigation />
      <Carousel fade={true} interval={5000} indicators={false} controls={false}>
        <Carousel.Item>
        <div className="item">
          <div className="slider-item">
            <div className="overlay"></div>
            <div className="container">
              <div className="row slider-text align-items-center text-center justify-content-center">
                <div className="col-md-12">
                  <p className="text">{t("hello")}</p>
                  <h1 className="mb-3 text">Mohamed Lamine OUBAYA</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="item">
          <div className="slider-item">
            <div className="overlay"></div>
            <div className="container">
              <div className="row slider-text align-items-center text-center justify-content-center">
                <div className="col-md-12">
                  <p>{t("Im")}</p>
                  <h1 className="mb-3">{t("dev_secu")}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>
      </Carousel>

      <section class="btns">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mohamed-lamine-oubaya"
        >
          <div className="text">
            <i className="fab fa-linkedin fa-2x"></i>
          </div>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AMINE1921"
        >
          <div className="text">
            <i className="fab fa-github-square fa-2x"></i>
          </div>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </a>
      </section>
    </div>
  );
};

export default Home;
