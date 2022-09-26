import React, { Component } from "react";
import Cv from "./Cv";
import Input from "./Input";
import uniqid from 'uniqid';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        firstName: 'First',
        lastName: 'Last',
        title: 'Title',
        address: 'Address',
        email: 'Email',
        phoneNumber: 'Phone Number',
        description: 'Description'
      },
      experience: {
        expYearStart: '',
        expYearEnd: '',
        expTitle: '',
        expCompany: '',
        expId: uniqid(),

      },
      experienceList: [],
      education: {
        eduSchool: '',
        eduProgram: '',
        eduYearStart: '',
        eduYearEnd: '',
        eduId: uniqid(),
      },
      educationList: [],
    };
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleExpChange = this.handleExpChange.bind(this);
    this.onSubmitExp = this.onSubmitExp.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);
    this.onSubmitEdu = this.onSubmitEdu.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  handleGeneralInfoChange = (e) => {
    this.setState({
      generalInfo: {
        ...this.state.generalInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  handleExpChange = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        [e.target.name]: e.target.value
      }
    });
  };

  handleEduChange = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmitExp = (e) => {
    e.preventDefault();
    if (this.state.experience.expTitle !== '') {
      this.setState({
        experienceList: this.state.experienceList.concat(this.state.experience),
        experience: {
          expYearStart: '',
          expYearEnd: '',
          expTitle: '',
          expCompany: '',
          expId: uniqid()
        }
      })
    }
    else {
      alert('Fill in required fields.')
    }
  }

  onSubmitEdu = (e) => {
    e.preventDefault();
    if (this.state.education.eduSchool !== '') {
      this.setState({
        educationList: this.state.educationList.concat(this.state.education),
        education: {
          eduSchool: '',
          eduProgram: '',
          eduYearStart: '',
          eduYearEnd: '',
          eduId: uniqid()
        }
      })
    }
    else {
      alert('Fill in required fields.')
    }
  }

  removeExperience(e) {
    this.setState({
      experienceList: this.state.experienceList.filter((experience) => {
        return experience.expId !== e.target.value;
      })
    })
  }

  removeEducation(e) {
    this.setState({
      educationList: this.state.educationList.filter((education) => {
        return education.eduId !== e.target.value;
      })
    })

  }


  render() {
    return (
      <main>
        <Input
          data={this.state}
          removeEducation={this.removeEducation.bind(this)}
          removeExperience={this.removeExperience.bind(this)}
          onSubmitExp={this.onSubmitExp.bind(this)}
          onSubmitEdu={this.onSubmitEdu.bind(this)}
          handleExpChange={this.handleExpChange.bind(this)}
          handleEduChange={this.handleEduChange.bind(this)}
          handleGeneralInfoChange={this.handleGeneralInfoChange.bind(this)}>
        </Input>
        <Cv data={this.state}></Cv>
      </main>
    )
  }
}

export default Main;