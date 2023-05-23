import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        setFirstname ("");
        setLastname ("");
        setEmail ("");
        setPassword ("");
        setConfirmPassword ("");
    };
    
    return(
        <div id="container">
            <form onSubmit={ createUser }>
                <div className='form'>
                    <label>First Name: </label> 
                    <input type="text" value={ firstname } onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div className='form'>
                    <label>Last Name: </label> 
                    <input type="text" value={ lastname } onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div className='form'>
                    <label>Email Address: </label> 
                    <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className='form'>
                    <label>Password: </label>
                    <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className='form'>
                    <label>Confirm Password: </label>
                    <input type="password" value={ confirmpassword } onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            </form>
            <h2>Your Form Data</h2>
            <table>
                <tr>
                    <td>First Name</td>
                    <td> {firstname} </td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td> {lastname} </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td> {email} </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td> {password} </td>
                </tr>
                <tr>
                <td>Confirm Password</td>
                <td> {confirmpassword} </td>
                </tr>
            </table>
        </div>
    );
};
    
export default Form;
