import React, { Component } from 'react';

class EducationList extends Component {
  render() {
    const educationList = this.props.data.educationList;
    const EduList = ({ educationList }) => (
      <div className='list'>
        {educationList.map(edu => (
          <div className='inputEduList' key={edu.eduId}>
            <p >School: {edu.eduSchool}</p>
            <p >Program: {edu.eduProgram}</p>
            <p >Start Date: {edu.eduYearStart}</p>
            <p >End Date: {edu.eduYearEnd}</p>
            <button value={edu.eduId} onClick={this.props.removeEducation}>Delete</button>
          </div>
        ))}
      </div>
    )
    return (
      <>
        <EduList educationList={educationList}></EduList>
      </>
    )
  }
}

export default EducationList;

