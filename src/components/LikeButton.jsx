import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      arr: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
      arrIndex: 0,
    };
  }

  /* required when method is passed */
  handleIncrementClick = () => {
    this.setState({
      value: this.state.value + 1,
      arrIndex: this.state.arrIndex + 1,
    });
  };

  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: this.state.arr[this.state.arrIndex],
            color: 'white',
          }}
          onClick={this.handleIncrementClick}
        >
          {this.state.value} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
