/* import React from 'react';

class Dice extends React.Component {
  constructor() {
    super();

    this.state = {
      image: image,
      rolling: false,
    };
  }

  handleDiceClick = () => {
    this.setState({
      image: 'img/dice-empty.png',
      rolling: true,
    });
    setTimeOut(() => {
      const image = this.pickRandomImage();
      this.setState({ image: image, rolling: false });
    }, 1000);
  };

  pickRandomImage() {
    const dots = Math.ceil(Math.random() * 6);
  }
  render() {
    return (
      <img src={this.state.image} alt="Dice" onClick={this.handleDiceClick} />
    );
  }
}

export default Dice;
 */
