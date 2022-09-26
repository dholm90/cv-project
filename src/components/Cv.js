import React, { Component } from 'react';

class Cv extends Component {
  render() {
    const generalInfo = this.props.data.generalInfo;
    const experienceList = this.props.data.experienceList;
    const educationList = this.props.data.educationList;
    return (
      <section id='output'>

        <header className="cvHeader">
          <div id='left'>
            <h2>{generalInfo.firstName} {generalInfo.lastName}</h2>
            <h3>{generalInfo.title}</h3>

          </div>
          <div id='right'>
            <p>{generalInfo.email}</p>
            <p>{generalInfo.phoneNumber}</p>
            <p>{generalInfo.address}</p>
          </div>
        </header>
        <p className='cvDescription'>{generalInfo.description}</p>
        <article className="experienceList">
          <h3>Experience</h3>
          {experienceList.map(exp => (
            <article key={exp.expId} className='cvExperience'>
              <p className='cvExpTitle'>{exp.expTitle}</p>
              <p className='cvExpCompany'>{exp.expCompany}</p>
              <p className='cvExpYearStart'>{exp.expYearStart}</p>
              <p className='cvExpYearEnd'>{exp.expYearEnd}</p>
            </article>
          ))}
        </article>
        <article className="educationList">
          <h3>Education</h3>
          {educationList.map(edu => (
            <article key={edu.eduId} className='cvEducation'>
              <p className='cvEduSchool'>{edu.eduSchool}</p>
              <p className='cvEduProgram'>{edu.eduProgram}</p>
              <p className='cvEduYearStart'>{edu.eduYearStart}</p>
              <p className='cvEduYearEnd'>{edu.eduYearEnd}</p>
            </article>
          ))}

        </article>

      </section>
    )
  }
}

export default Cv;