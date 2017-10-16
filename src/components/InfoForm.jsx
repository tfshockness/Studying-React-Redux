import React from 'react'


class InfoForm extends React.Component
{
    constructor(props)
    {
        super(props);
        //I create name, address properties and functions just to test and see how it works! :) 
        this.state = {
            name: '',
            address: '',
            isSame: true,
            showOtherForm: false
        }

        this.changeName = this.changeName.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.checkAddress = this.checkAddress.bind(this);
        this.showOtherForm = this.showOtherForm.bind(this);
    }

    changeName(e)
    {
        let name = e.target.value;

        this.setState(() => {
            return{
                name: name
            }
        })
    }

    changeAddress(e)
    {
        let address = e.target.value;

        this.setState( () => {
            return {
                address: address
            }
        })
    }

    checkAddress()
    {
        // let checkAddress = e.target.value;

        this.setState( (prevState) => {
            //console.log(!pState.isSame);
            return {
                isSame: !prevState.isSame
            }
        })
        //HERE is where I make the Call for the parent Method to show the Form. I pass the method by props and call here after 
        //change the value of isSame.
        //Yes, I am controlling the boolean in 2 places. To change that, best way is using Redux. :)
        this.props.handleAddressForm();
    }

    showOtherForm()
    {
        this.setState( (prevState) => {
            return {
                showOtherForm: !prevState.showOtherForm
            }
        })

         //HERE is where I make the Call for the parent Method to show the Form. I pass the method by props and call here after 
        //change the value of isSame.
        //Yes, I am controlling the boolean in 2 places. To change that, best way is using Redux. :)
        this.props.handleOtherForm();
    }

    handleSubmit(e)
    {
        e.prevendDefault();

    }
    render()
    {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Name: 
                    <input type="text" value={this.state.name} onChange={this.changeName}/>
                </label>
                <br />
        
                <label>Address: 
                    <input type="text" value={this.state.address} onChange={this.changeAddress} />
                </label>
                <br />
        
                <label>Delivery address is the same?
                <input type="checkbox" name="isSame" checked={this.state.isSame} onChange={this.checkAddress}/>
                </label>
                <br />
                <label>show the other form?
                <input type="checkbox" name="showOtherForm" checked={this.state.showOtherForm} onChange={this.showOtherForm}/>
                </label>
                <br />
            </form>
            </div>
        )
    }
}

export default InfoForm;