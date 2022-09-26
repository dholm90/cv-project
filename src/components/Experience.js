import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const expData = this.props.data.experience;
    return (
      <div className='experience'>
        <label htmlFor='expTitle'>Title: </label>
        <input type='text' id='expTitle' name='expTitle' value={expData.expTitle} onChange={this.props.handleExpChange}></input>

        <label htmlFor='expCompany'>Company: </label>
        <input type='text' id='expCompany' name='expCompany' value={expData.expCompany} onChange={this.props.handleExpChange}></input>

        <label htmlFor='expYearStart'>Start Date: </label>
        <input type='text' id='expYearStart' name='expYearStart' value={expData.expYearStart} onChange={this.props.handleExpChange}></input>

        <label htmlFor='expYearEnd'>End Date: </label>
        <input type='text' id='expYearEnd' name='expYearEnd' value={expData.expYearEnd} onChange={this.props.handleExpChange}></input>

        <button type='submit' name='expAdd' onClick={this.props.onSubmitExp}>Add Experience</button>
      </div>
    )
  }
}

export default Experience;


