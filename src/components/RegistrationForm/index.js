// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isFirstnameEmpty: false,
    isLastnameEmpty: false,
    isFormSubmit: false,
  }

  onSubmitAnotherForm = event => {
    event.preventDefault()
    this.setState({isFormSubmit: false})
  }

  validatingData = () => {
    const {firstname, lastname} = this.state

    if (firstname === '' && lastname === '') {
      this.setState({isFirstnameEmpty: true})
      this.setState({isLastnameEmpty: true})
    } else if (lastname === '') {
      this.setState({isLastnameEmpty: true})
    } else if (firstname === '') {
      this.setState({isFirstnameEmpty: true})
    } else {
      this.setState({isFormSubmit: true})
      console.log('hello rama')
    }
  }

  onSubmitForm = event => {
    event.preventDefault()

    this.validatingData()
  }

  onBlurFirstname = event => {
    const isTrue = event.target.value === ''

    this.setState({isFirstnameEmpty: isTrue, firstname: event.target.value})
  }

  onBlurLastname = event => {
    const isTrue = event.target.value === ''

    this.setState({isLastnameEmpty: isTrue, lastname: event.target.value})
  }

  renderLastname = () => {
    const {lastname, isLastnameEmpty} = this.state

    const className = isLastnameEmpty
      ? 'lastname-input-field error-class-name'
      : 'lastname-input-field'

    return (
      <>
        <label className="label-name" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          placeholder="Last name"
          onBlur={this.onBlurLastname}
          className={className}
        />
        {isLastnameEmpty && <p className="error-msg">Required</p>}
      </>
    )
  }

  renderFirstname = () => {
    const {firstname, isFirstnameEmpty} = this.state

    const className = isFirstnameEmpty
      ? 'firstname-input-field error-class-name'
      : 'firstname-input-field'

    return (
      <>
        <label className="label-name" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          placeholder="First name"
          onBlur={this.onBlurFirstname}
          className={className}
        />
        {isFirstnameEmpty && <p className="error-msg">Required</p>}
      </>
    )
  }

  renderFormSubmitView = () => (
    <>
      <form className="form-container" onSubmit={this.onSubmitForm} id="myForm">
        <div className="user-input-container">{this.renderFirstname()}</div>
        <div className="user-input-container">{this.renderLastname()}</div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </>
  )

  renderFormSuccessView = () => (
    <>
      <form
        className="form-container"
        onSubmit={this.onSubmitAnotherForm}
        id="mySuccessForm"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-icon"
        />
        <p className="response">Submitted Successfully</p>
        <button type="submit" className="submit-another-response-btn">
          Submit Another Response
        </button>
      </form>
    </>
  )

  render() {
    const {isFormSubmit} = this.state

    return (
      <div className="registration-form-bg-container">
        <div className="registration-form-container">
          <h1 className="main-heading">Registration</h1>
          {isFormSubmit
            ? this.renderFormSuccessView()
            : this.renderFormSubmitView()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
