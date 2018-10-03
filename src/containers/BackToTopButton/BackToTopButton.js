import React, { Component } from 'react';
import classNames from 'classnames';
import './BackToTopButton.scss';

/*
    <BackToTopButton topId=''/>
*/
class BackToTopButton extends Component {
    constructor(props) {
        super(props);
        
        this.offset = 300;
        this.offsetOpacity = 1200;
        this.scrollDuration = 700;
        this.scrolling = false;
    }

    componentDidMount() {
        this.backTop = document.getElementsByClassName('backToTopButton_js')[0];
        this.setButtonConfigurations();
    }

    setButtonConfigurations = () => {
        if( this.backTop ) {
            window.addEventListener("scroll", (event) => {
                if( !this.scrolling ) {
                    this.scrolling = true;
                    (!window.requestAnimationFrame) ? setTimeout(this.checkBackToTop, 250) : window.requestAnimationFrame(this.checkBackToTop);
                }
            });
            this.backTop.addEventListener('click', (event) => {
                event.preventDefault();
                (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : this.scrollTop(this.scrollDuration);
            });
        }
    }

    checkBackToTop = () => {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > this.offset ) ? this.addClass(this.backTop, 'backToTopButton--show') : this.removeClass(this.backTop, 'backToTopButton--show', 'backToTopButton--fade-out');
		( windowTop > this.offsetOpacity ) && this.addClass(this.backTop, 'backToTopButton--fade-out');
		this.scrolling = false;
    }

    scrollTop = (duration) => {
	    var start = window.scrollY || document.documentElement.scrollTop,
	        currentTime = null;
	        
	    var animateScroll = (timestamp) => {
	    	if (!currentTime) currentTime = timestamp;        
	        var progress = timestamp - currentTime;
	        var val = Math.max(this.easeInOutQuad(progress, start, -start, duration), 0);
	        window.scrollTo(0, val);
	        if(progress < duration) {
	            window.requestAnimationFrame(animateScroll);
	        }
	    };

	    window.requestAnimationFrame(animateScroll);
    }

    easeInOutQuad = (t, b, c, d) => {
        t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	}
    
    hasClass = (el, className) => {
        if (el.classList) return el.classList.contains(className);
        else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    addClass = (el, className) => {
        var classList = className.split(' ');
        if (el.classList) el.classList.add(classList[0]);
        else if (!this.hasClass(el, classList[0])) el.className += " " + classList[0];
        if (classList.length > 1) this.addClass(el, classList.slice(1).join(' '));
    }

    removeClass = (el, className) => {
        var classList = className.split(' ');
        if (el.classList) el.classList.remove(classList[0]);	
        else if(this.hasClass(el, classList[0])) {
            var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
            el.className=el.className.replace(reg, ' ');
        }
        if (classList.length > 1) this.removeClass(el, classList.slice(1).join(' '));
    }
    
    render() {
        return (
            <a href={this.props.topId} className={classNames('backToTopButton', 'backToTopButton_js')}>Top</a>
        );
    }
}

export default BackToTopButton;