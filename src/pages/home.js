import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navigation from '../components/Navigation/Navigation';
import Popup from "../components/Popup";

const home = () => {
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
            navText = {["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"]}
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
            <div class="slider-item js-fullheight">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                        <div class="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p>Salut ! Je suis</p>
                            <h1 class="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Mohamed Lamine OUBAYA</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="item">
                <div class="slider-item js-fullheight">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                            <div class="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                <p>Je suis étudiant à</p>
                                <h1 class="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">CESI école d'ingénieurs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </OwlCarousel>
            <Popup />
        </div>
    );
};

export default home;