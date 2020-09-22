import React from 'react';
import Navigation from '../components/Navigation';

const home = () => {
    return (
        <div>
            <Navigation />
            <div class="slider-item js-fullheight">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                        <div class="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p>SALUT JE SUIS</p>
                            <h1 class="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Mohamed Lamine OUBAYA</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;