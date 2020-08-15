import React, { Component } from 'react';
import './SignupPage.css';

class SignupPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      nationality: '',
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    console.log(value);
    this.setState({
      [property]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { email, nationality } = this.state;
    console.log(email, nationality);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleFormSubmission}>
          <label htmlFor="validationServer013">Email</label>
          <input
            class="form-control is-valid"
            id="validationServer013"
            required
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <label htmlFor="password-input">password</label>
          <input
            id="password-input"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <label htmlFor="lang-select">Nationality</label>
          <select
            name="nationality"
            id="lang-select"
            onChange={this.handleInputChange}
          >
            <option value="en">en</option>
            <option value="de">de</option>
            <option value="fr">fr</option>
          </select>
          <button>Send Message</button>
        </form>
        <p>
          {this.state.nationality === 'en'
            ? 'Hello'
            : this.state.nationality === 'de'
            ? 'Hallo'
            : 'Bonjour'}
          {','}{' '}
        </p>
        <p> Your email is {this.state.email}.</p>
        <p> Your email adress is </p>
      </div>
    );
  }
}

export default SignupPage;
