import React, { Component } from 'react';
import Education from './Education';
import EducationList from './EducationList';
import Experience from './Experience';
import ExperienceList from './ExperienceList'

class Input extends Component {

  render() {
    return (
      <div id='input'>
        <form className='generalInfo'>
          <h2 className='inputHeader'>General Information</h2>

          <label htmlFor='firstName'>First Name: </label>
          <input type='text' id='firstName' name='firstName' onChange={this.props.handleGeneralInfoChange}></input>

          <label htmlFor='lastName'>Last Name: </label>
          <input type='text' id='lastName' name='lastName' onChange={this.props.handleGeneralInfoChange}></input>

          <label htmlFor='title'>Title: </label>
          <input type='text' id='title' name='title' onChange={this.props.handleGeneralInfoChange}></input>

          <label htmlFor='address'>Address: </label>
          <input type='text' id='address' name='address' onChange={this.props.handleGeneralInfoChange}></input>

          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' name='email' onChange={this.props.handleGeneralInfoChange}></input>

          <label htmlFor='phone'>Phone Number: </label>
          <input type='tel' id='phone' name='phoneNumber' onChange={this.props.handleGeneralInfoChange}></input>

          <label htmlFor='description'>Description: </label>
          <textarea id='description' rows={5} cols={20} name='description' onChange={this.props.handleGeneralInfoChange}></textarea>

        </form>
        <form className="inputExp">
          <h2 className='inputHeader'>Experience</h2>
          <Experience data={this.props.data} onSubmitExp={this.props.onSubmitExp} handleExpChange={this.props.handleExpChange}></Experience>
          <ExperienceList removeExperience={this.props.removeExperience} data={this.props.data}></ExperienceList>

        </form>
        <form className="inputEdu">
          <h2 className='inputHeader'>Education</h2>
          <Education data={this.props.data} onSubmitEdu={this.props.onSubmitEdu} handleEduChange={this.props.handleEduChange}></Education>
          <EducationList removeEducation={this.props.removeEducation} data={this.props.data}></EducationList>
        </form>
      </div>
    )
  }
}

export default Input;