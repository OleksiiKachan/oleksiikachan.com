import React, { Component } from 'react';
import classNames from 'classnames';
import './Footer.css';
import Logo from '../../images/logo.png';

/*
    <Footer resources={} className='' />
*/
class Footer extends Component {
    render() {
        return (
            <footer className={classNames('footer', this.props.className)}>
                <div className={classNames('footer__section', 'footer__linksSection')}>
                {
                    this.props.resources.map(resource => {
                        return(
                            <a href={resource.link}><i className={classNames('footer__link', 'fa', `fa-${resource.resource}`)}></i></a>
                        );
                    })
                }
                </div>

                <div className={classNames('footer__section', 'footer__logoSection')}>
                    <img className={classNames('footer__logo')} src={Logo} alt='Oleksii Kachan Logo' />
                </div>

		    </footer>
        );
    }
}

export default Footer;