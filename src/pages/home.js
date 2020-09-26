import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navigation from '../components/Navigation/Navigation';

const Home = () => {
     useEffect(() => {
        anime({
            targets: '.item .text',
            translateY: [-100,0],
            easing: "easeOutExpo",
            duration: 1500,
            delay: (el, i) => 30 * i
        })
     });
    return (
        <div>
            <Navigation />
            <OwlCarousel
            className="owl-theme"
            items="2"
            autoplay
            autoHeightClass={false}
            animateOut= "fadeOut"
	        animateIn= "fadeIn"
            nav={false}
            dots={false}
            margin={0}
            loop
            autoplayHoverPause= {false}
            navText = {["<span className='ion-md-arrow-back'></span>","<span className='ion-chevron-right'></span>"]}
            responsive={{
                0:{
                  items:1,
                  nav:false
                },
                600:{
                  items:1,
                  nav:false
                },
                1000:{
                  items:1,
                  nav:false
                }
              }}
            >
            <div className="item">
            <div className="slider-item">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row slider-text align-items-center text-center justify-content-center">
                        <div className="col-md-12">
                            <p className="text">Salut ! Je suis</p>
                            <h1 className="mb-3 text">Mohamed Lamine OUBAYA</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="item">
                <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row slider-text align-items-center text-center justify-content-center">
                            <div className="col-md-12">
                                <p>Je suis étudiant à</p>
                                <h1 className="mb-3">CESI école d'ingénieurs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </OwlCarousel>
            <section class="btns">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-lamine-oubaya-124326194">
                <div className="text"><i className="fab fa-linkedin fa-2x"></i></div>
                <span class="line -right"></span>
                <span class="line -top"></span>
                <span class="line -left"></span>
                <span class="line -bottom"></span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AMINE1921">
                <div className="text"><i className="fab fa-github-square fa-2x"></i></div>
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