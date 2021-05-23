import React from "react";
import  axios from "axios";
import './style1.css';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            userId:'',
            password:''
        }
    }

    onChangeUserId = (event)=>{
        this.setState({userId:event.target.value})
    }
    onChangeEmail = (event)=>{
        this.setState({email:event.target.value})
    }
    onChangePassword = (event)=>{
        this.setState({password:event.target.value})
    }
    onSubmit =(event)=>{
        event.preventDefault();
        const newUser= {
            userId : this.state.userId,
            email:this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3000/users/add',newUser)
        .then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
        this.setState({
            userId:'',
            email:'',
            password:'',
        })
    }
    render(){
return(
    
    
    <div class="form-wrapper">
 
 <h1>Sign up</h1>
  
 <form onSubmit={this.onSubmit}>
    
     <label for="email">E-mail:</label>
     <input type="email" id="email" name="email"  value={this.state.email} onChange={this.onChangeEmail} placeholder="Your Email"/>

     <label for="email">Password:</label>
     <input type="password" id="password" name="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Enter Password"/>

     <label for="confirm_password">Conform Password:</label>
     <input type="password" id="confirm_password" name="confirm_password" placeholder="Conform Password"/>

     <input type="submit"/>
    </form>
</div>

);

}
}
export default SignUp ;