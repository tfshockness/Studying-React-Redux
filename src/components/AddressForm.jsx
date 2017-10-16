import React from 'react'
const AddressForm = () => {
    return(
    <div>
        <form>
            <h1>Enter the Address for Delivery: </h1>
            <label>Country: 
                <input type="text"/>
            </label>
            <br />

            <label>Address: 
                <input type="text" />
            </label>
            <br />

        </form>
    </div>
)};


export default AddressForm;