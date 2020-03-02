import React, { Component } from 'react';
import { REGISTER_PAGE_ID,LIST_PAGE_ID, } from './constants';
import './App.css';

export default class LoginView extends Component{
  constructor(props){
    super(props);

    this.state={
      error:"",
      name:"",
      password:"",
      loggedInUserObj:null,

    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
    this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this);
  }

  onRegisterButtonClick(event){
    event.preventDefault();
    this.props.onPageChange(REGISTER_PAGE_ID);
  }

  onNameChange(event){
      this.setState({
        error:"",
      })
      this.setState({
        name:event.target.value,
      })
    }
    onPasswordChange(event){
      this.setState({
        error:"",
      })
      this.setState({
        password:event.target.value,
      })
    }
    onLoginButtonClick(event){
      event.preventDefault();
      const { name,password } = this.state;

      let user = JSON.parse(localStorage.getItem("UserData"));
      let userDatum = {};
      let isFound = false;
      if(user === null || user === "" || user === undefined ){
        this.setState({
          error:"User doesn't Exists"
        })
      }
      else{
      for (userDatum of user) {
        if(name === userDatum.name && password === userDatum.password){
          this.setState({
            loggedInUserObj : userDatum,
          })
          localStorage.setItem("Logged-in-User",JSON.stringify(userDatum));
          isFound = true;
          break;
        }
      }
      if(isFound === true){
        alert("Logged in Successfully!")
        this.props.onPageChange(LIST_PAGE_ID);
      }
      else{
        this.setState({
          error:"name or Password is incorrect!"
        })
      }

    }
}
    render(){
      const { name,password,error } = this.state;
      return(
        <div className="login">
            <h1>Login</h1>
            <div className="validation-error" style={{marginLeft:"26%"}}>
                {error}
            </div>
            <br />
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={ (event)=>{this.onNameChange(event)}}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={ (event)=>{this.onPasswordChange(event)}}
            />
            <br>
            </br>
            <button onClick={(event)=>{this.onLoginButtonClick(event)}}>Login</button>

            <button onClick={(event)=> this.onRegisterButtonClick(event)}>Register</button>

            </div>
    )
  }
}
