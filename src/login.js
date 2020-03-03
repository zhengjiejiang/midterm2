import React, { Component } from 'react';
import { REGISTER_PAGE_ID,LIST_PAGE_ID, } from './constants';
import './App.css';

export default class LoginView extends Component{
  constructor(props){
    super(props);

    this.state={
      hasError:false,
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
        hasError:"",
      })
      this.setState({
        name:event.target.value,
      })
    }
    onPasswordChange(event){
      this.setState({
        hasError:"",
      })
      this.setState({
        password:event.target.value,
      })
    }
    onLoginButtonClick(event){
      event.preventDefault();
      const { name,password } = this.state;
      if(name ==="123" && password ==="123" ){
         this.props.onPageChange(LIST_PAGE_ID)
      } else{this.setState({
          hasError : true
      })

    }
  }


  render(){
      const { name,password,hasError } = this.state;
      return(
        <div className="login">
            <h1>Login</h1>
            {hasError &&
              <div>
                    <strong> Name or password is wrong :(</strong>
              </div>
            }

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
