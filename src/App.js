import React, { Component } from "react";
import LoginView from "./login";
import RegisterView from "./register";
import ListView from "./list";
import DetailView from './view';
import UpdateView from './edit';
import {  TREEPAL_PAGE , REGISTER_PAGE_ID, LOGIN_PAGE_ID, LIST_PAGE_ID,EDIT_PAGE_ID, VIEW_PAGE_ID,} from "./constants"


export default class AppNavigation extends Component{
  constructor(props){
    super(props);
    let page = localStorage.getItem("Tree Page");
    const id = localStorage.getItem("Tree_Obj_id");
    if(page === "" || page === null || page === undefined){
      page = LOGIN_PAGE_ID
    }
    this.state={
      page: page,
      id:id,

    }
    this.onPageChange=this.onPageChange.bind(this);
  }
  onPageChange(page,id){
    this.setState({
      page:page,
      id:id,
    })
    localStorage.setItem("Tree Page",page);
    localStorage.setItem("Tree_Obj_id",id)
  }
  render(){
    const { page } = this.state;
    return(
      <div>
      {page === LOGIN_PAGE_ID&&
      <LoginView
      onchangepage = { (page)=>this.onChangePage(page) }
      />
  }
      {page === REGISTER_PAGE_ID&&
      <RegisterView
      onchangepage = { (page)=>this.onChangePage(page) }
      />
  }
      {page === LIST_PAGE_ID &&
      <ListView
      onPageChange={(page)=>this.onChangePage(page) }
      />
  }
      {page === EDIT_PAGE_ID &&
      <UpdateView
      onPageChange={(page)=>this.onChangePage(page)}
      />
  }
      {page === VIEW_PAGE_ID &&
      <DetailView
      onPageChange={(page)=>this.onChangePage(page)}
      />
  }

      </div>
    )
  }
}
