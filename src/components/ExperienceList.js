import React, { Component } from 'react';

class ExperienceList extends Component {
  render() {
    const experienceList = this.props.data.experienceList;
    const ExpList = ({ experienceList }) => (
      <div className='list'>
        {experienceList.map(exp => (
          <div className='inputExpList' key={exp.expId}>
            <p >Title: {exp.expTitle}</p>
            <p >Company: {exp.expCompany}</p>
            <p >Start Date: {exp.expYearStart}</p>
            <p >End Date: {exp.expYearEnd}</p>
            <button value={exp.expId} onClick={this.props.removeExperience}>Delete</button>
          </div>
        ))}
      </div>
    )
    return (
      <>
        <ExpList experienceList={experienceList}></ExpList>
      </>
    )
  }
}

export default ExperienceList;

