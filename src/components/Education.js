import React, { Component } from 'react';

class Education extends Component {
  render() {
    const eduData = this.props.data.education;
    return (
      <div className='education'>
        <label htmlFor='eduSchool'>School: </label>
        <input type='text' id='eduSchool' name='eduSchool' value={eduData.eduSchool} onChange={this.props.handleEduChange}></input>

        <label htmlFor='eduProgram'>Program: </label>
        <input type='text' id='eduProgram' name='eduProgram' value={eduData.eduProgram} onChange={this.props.handleEduChange}></input>

        <label htmlFor='eduYearStart'>Start Date: </label>
        <input type='text' id='eduYearStart' name='eduYearStart' value={eduData.eduYearStart} onChange={this.props.handleEduChange}></input>

        <label htmlFor='eduYearEnd'>End Date: </label>
        <input type='text' id='eduYearEnd' name='eduYearEnd' value={eduData.eduYearEnd} onChange={this.props.handleEduChange}></input>

        <button type='submit' name='eduAdd' onClick={this.props.onSubmitEdu}>Add Education</button>
      </div>
    )
  }
}

export default Education;

// eduSchool: '',
//         eduProgram: '',
//         eduYearStart: '',
//         eduYearEnd: '',
//         eduId: uniqid(),