import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>General Information</h2>

          <label htmlFor='firstName'>First Name: </label>
          <input type='text' id='firstName'></input>

          <label htmlFor='lastName'>Last Name: </label>
          <input type='text' id='lastName'></input>

          <label htmlFor='title'>Title: </label>
          <input type='text' id='title'></input>

          <label htmlFor='address'>Address: </label>
          <input type='text' id='address'></input>

          <label htmlFor='email'>Email: </label>
          <input type='email' id='email'></input>

          <label htmlFor='phone'>Phone Number: </label>
          <input type='tel' id='phone'></input>

          <label htmlFor='description'>Description: </label>
          <textarea id='description' rows={5} cols={20}></textarea>
        </form>
      </div>
    )
  }
}

export default Input;