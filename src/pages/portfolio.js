import React, { useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import Navigation from '../components/Navigation/Navigation';
import ProgressBar from "react-scroll-progress-bar";
import ScrollDown from '../components/ScrollDown';
import Popup from "../components/Popup";

const Portfolio = () => {
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
                        title="Site Web Mohamed Lamine OUBAYA sur ReactJS" 
                        imgPopup={media['screen1.png']}
                        git="https://github.com/AMINE1921/ml-website" 
                        link="https://mloubaya.fr/#/" 
                    />
                    <Popup 
                        img={media['proj2.png']} 
                        title="TodoList Interface en HTML/CSS et JS" 
                        imgPopup={media['screen2.png']}
                        git="https://github.com/AMINE1921/ToDOiT" 
                        link="https://amine1921.github.io/ToDOiT/" 
                    />
                    <Popup 
                        refScroll={scrollDown.ref}
                        img={media['proj3.png']} 
                        title="TodoList Interface et Back-end sur Symfony5"
                        imgPopup={media['screen2.png']}
                        git="https://github.com/AMINE1921/TodoList_Symfony5"
                    />
                    <Popup 
                        img={media['proj4.png']} 
                        title="Réecriture du jeux BoulderDash en JAVA"
                        imgPopup={media['screen4.png']}
                    />
                    <Popup 
                        img={media['proj5.png']} 
                        title="Création d'un robot-véhicule autonome"
                        vidPopup="https://r1---sn-25glene7.c.drive.google.com/videoplayback?expire=1601248765&ei=veVwX6n_MsbczLUPz4CLmAM&ip=89.89.169.41&cp=QVRFU0NfV1dURlhPOmJ0T19JQWxzRlRQQXAwUnVxcUw4NGswNF9vS2FXUmFFX0lianNTSGVobmc&id=311f004b530b9b10&itag=22&source=webdrive&requiressl=yes&mh=e0&mm=32&mn=sn-25glene7&ms=su&mv=m&mvi=1&pl=20&sc=yes&ttl=transient&susc=dr&driveid=18pireRebpr5Uqz-vnlb8KJmQFqgbzo_I&app=texmex&mime=video/mp4&vprv=1&prv=1&dur=84.567&lmt=1601234345563258&mt=1601234239&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgHTi6woPqXRMMBLWEN3laCr1eYkEjNV9yBAC7c46F1GQCIQCDjaTdENEzBIay0xvfWU9Wn-RhCmQoS7xryWVolKQJNg==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIhAOLgSO9GU9x5JZJx2odw601SvjvwkEFEYbGv_fctnLH2AiB9ccBc_zqD85dnZlnG_vE71yS7K4zHcNnVqspni55dCg==&cpn=6PPFXUwYR3KCbxY3&c=WEB_EMBEDDED_PLAYER&cver=20200925"
                        git="https://github.com/AMINE1921/Car"
                    />
                    <Popup 
                        img={media['proj6.png']} 
                        title="Site web pour le BDE du CESI en HTML/CSS, JS et PHP"
                        imgPopup={media['screen6.png']}
                        git="https://github.com/yPROGGZ/ProjetWeb"
                    />
                </div>
            </div>
            {scrollDown.scrollDown}
        </div>
    );
};

export default Portfolio;