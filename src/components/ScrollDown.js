import React, { useRef } from 'react';
import $ from 'jquery';

const ScrollDown = () => {
    const scrollToRef = (ref) => window.scrollTo(0,ref.current.offsetTop-50);
    const Ref = useRef(null);
    const executeScroll = () => {
        scrollToRef(Ref);
        $('.scrollDown').fadeOut();
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $('.scrollDown').fadeOut();
        } else {
          $('.scrollDown').fadeIn();
        }
    });
    const divScroll = <div className="scrollDown" onClick={executeScroll}>
                        <i class="scrollDownButton fas fa-angle-double-down fa-3x"></i>
                    </div>
    return ({
        scrollDown: divScroll, 
        ref: Ref
    });
};

export default ScrollDown;