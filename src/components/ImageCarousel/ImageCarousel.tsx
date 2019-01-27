import React, { Component } from 'react';
import classNames from 'classnames';
import './ImageCarousel.scss';
/*
    <ImageCarousel items={} className=''/>
*/
class ImageCarousel extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentImageIndex: 0,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  private previousSlide() {
    const lastIndex = this.props.items.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  private nextSlide() {
    const lastIndex = this.props.items.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />
        <ImageSlide item={this.props.items[this.state.currentImageIndex]} />
        <ImageDescription
          item={this.props.items[this.state.currentImageIndex]}
        />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}

export default ImageCarousel;

const Arrow = (props: { direction: any; clickFunction: any; glyph: any }) => (
  <div
    className={`slide-arrow ${props.direction}`}
    onClick={props.clickFunction}
  >
    {props.glyph}
  </div>
);

const ImageSlide = (props: { item: any }) => {
  const styles = {
    backgroundImage: `url(https://res.cloudinary.com/oleksiikachan/image/upload/v1543467854/portfolio/images/projects/${
      props.item.url
    })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return <div className="image-slide" style={styles} />;
};

const ImageDescription = (props: { item: any }) => {
  return <div className="image-description">{props.item.description}</div>;
};
