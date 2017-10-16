import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoForm from './components/InfoForm';
import AddressForm from './components/AddressForm';
import OtherForm from './components/OtherForm';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      showAddressForm: false,
      showOtherForm: false
    }
    this.handleAddressForm = this.handleAddressForm.bind(this);
    this.handleOtherForm = this.handleOtherForm.bind(this);
  }

  handleAddressForm()
  {
    this.setState( (prevState) => {
      //console.log(!prevState.showAddressForm);
      return {
        showAddressForm: !prevState.showAddressForm
      }
    });
  }

  handleOtherForm()
  {
    this.setState( (prevState) => {
      return {
        showOtherForm: !prevState.showOtherForm
      }
    })
  }

  //I have to pass the 2 methods to the InfoForm, because this functions it will be called from there, and fired in the parent.
  render() {
    return (
      <div className="App">
        <InfoForm 
        handleAddressForm={this.handleAddressForm} 
        handleOtherForm= {this.handleOtherForm}
        />
        { (this.state.showAddressForm) ? <AddressForm /> : undefined }
        { (this.state.showOtherForm) ? <OtherForm /> : undefined }
      </div>
    );
  }
}

export default App;





//Controlling a 