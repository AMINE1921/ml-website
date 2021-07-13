import React, { useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import Navigation from '../components/Navigation/Navigation';
import ProgressBar from "react-scroll-progress-bar";
import ScrollDown from '../components/ScrollDown';
import Popup from "../components/Popup";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const { t } = useTranslation();
    const scrollDown = ScrollDown();
    useEffect(() => {
        anime({
            targets: '.cardsProjects',
            translateY: [-100,0],
            easing: "easeOutExpo",
            duration: 1500,
            delay: (el, i) => 30 * i
        })
     });
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
        return images;
    }
      
    const media = importAll(require.context('../media', false, /\.(png|jpe?g|svg|mp4)$/));
    return (
        <div>
            <Navigation></Navigation>
            <ProgressBar height="6px" bgcolor="#2f89fc" duration="6" />
            <div className="container">
                <div className="row justify-content-center cardsProjects">
                    <Popup 
                        img={media['proj1.png']} 
                        title={t("mloubaya")}
                        imgPopup={media['screen1.png']}
                        git="https://github.com/AMINE1921/ml-website" 
                        link="https://mloubaya.fr/#/" 
                    />
                    <Popup 
                        img={media['proj2.png']} 
                        title={t("todoIt")}
                        imgPopup={media['screen2.png']}
                        git="https://github.com/AMINE1921/ToDOiT" 
                        link="https://amine1921.github.io/ToDOiT/" 
                    />
                    <Popup 
                        refScroll={scrollDown.ref}
                        img={media['proj3.png']} 
                        title={t("todoIt_symfony")}
                        imgPopup={media['screen2.png']}
                        git="https://github.com/AMINE1921/TodoList_Symfony5"
                    />
                    <Popup
                        img={media['proj4.png']} 
                        title={t("boulderDash")}
                        imgPopup={media['screen4.png']}
                    />
                    <Popup
                        img={media['proj5.png']} 
                        title={t("ingeniCar")}
                        vidPopup={media['PubACAR.mp4']}
                        git="https://github.com/AMINE1921/Car"
                    />
                    <Popup
                        img={media['proj6.png']} 
                        title={t("bdeShop")}
                        imgPopup={media['screen6.png']}
                        git="https://github.com/yPROGGZ/ProjetWeb"
                    />
                    <Popup
                        img={media['proj7.png']} 
                        title={t("easySave")}
                        imgPopup={media['screen7.png']}
                        git="https://dev.azure.com/joachimhuart/EasySave"
                    />
                </div>
            </div>
            {scrollDown.scrollDown}
        </div>
    );
};

export default Portfolio;