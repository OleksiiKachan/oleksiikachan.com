import React, { Component } from 'react';
import classNames from 'classnames';
import './Footer.scss';

/*
    <Footer resources={} className='' />
*/
class Footer extends Component<any, any> {
  render() {
    return (
      <footer className={classNames('footer', this.props.className)}>
        <div className={classNames('footer__section', 'footer__linksSection')}>
          {this.props.resources.map(
            (resource: { link: string; resource: string }) => {
              return (
                <a href={resource.link}>
                  <i
                    className={classNames(
                      'footer__link',
                      'fa',
                      `fa-${resource.resource}`
                    )}
                  />
                </a>
              );
            }
          )}
        </div>

        <div className={classNames('footer__section', 'footer__logoSection')}>
          <img
            className={classNames('footer__logo')}
            src="https://res.cloudinary.com/oleksiikachan/image/upload/v1543467884/portfolio/images/logo.png"
            alt="Oleksii Kachan Logo"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
