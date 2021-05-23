import React from "react";
import  axios from "axios";
import './style1.css';

function SignUp (){
return(
    
    
    <div class="form-wrapper">
 
 <h1>Sign up</h1>
  
 <form>
    
     <label for="email">E-mail:</label>
     <input type="email" id="email" name="email" placeholder="Your Email"/>

     <label for="email">Password:</label>
     <input type="password" id="password" name="password" placeholder="Enter Password"/>

     <label for="confirm_password">Conform Password:</label>
     <input type="password" id="confirm_password" name="confirm_password" placeholder="Conform Password"/>

     <input type="submit"/>
    </form>
</div>

);

}
export default SignUp ;