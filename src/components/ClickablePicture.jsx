import React from 'react';

class ClickablePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleClicked = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div>
        <img
          src={this.state.clicked ? this.props.img : this.props.imgClicked}
          onClick={this.handleClicked}
        />
      </div>
    );
  }
}

export default ClickablePicture;
