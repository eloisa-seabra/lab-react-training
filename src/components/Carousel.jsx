import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  handleClickRight = () => {
    this.navigate(1);
  };
  handleClickLeft = () => {
    this.navigate(-1);
  };

  navigate(value) {
    const currentIndex = this.state.index;
    const amountOfImages = this.props.imgs.length;
    const index = (currentIndex + value + amountOfImages) % amountOfImages;
    this.setState({
      index,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickRight}>{'>'}</button>
        <button onClick={this.handleClickLeft}>{'<'}</button>
        <img src={this.props.imgs[this.state.index]} alt="Carousel Image" />
      </div>
    );
  }
}

export default Carousel;
