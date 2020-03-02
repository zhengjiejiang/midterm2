
import React, { Component } from 'react';
import { TREE_ARR,EDIT_PAGE_ID,VIEW_PAGE_ID } from './constants';

export default class ListView extends Component{
  constructor(props){
    super(props);
    this.state={
      treeArr : JSON.parse(localStorage.getItem("Tree_Arr")),
      searchTerm:"",
    }

  this.onViewClick=this.onViewClick.bind(this);
  this.onEditClick=this.onEditClick.bind(this);
  this.onSearchChange=this.onSearchChange.bind(this);
  }

  onViewClick(event,id){
    event.preventDefault();
    this.props.onPageChange(VIEW_PAGE_ID,id);
  }

  onEditClick(event,id){
    event.preventDefault();
    this.props.onPageChange(EDIT_PAGE_ID,id)
  }

  onSearchChange(event){
    this.setState({
      searchTerm:event.target.value,
    })
  }


  render(){
    const filteredtreeElementsArr = this.state.treeArr.filter(
      (treeObj)=> treeObj.name.toLowerCase().includes( this.state.searchTerm.toLowerCase() )
    )

    return(
      <div>
      <h1>Tree List</h1>
      <input type="text" value={this.state.searchTerm} onChange={(event)=>this.onSearchChange(event)} />

      <br />

      <TreeList treeArr={filteredtreeElementsArr} onViewClick={this.onViewClick} onEditClick={this.onEditClick}/>
      </div>
    );
  }
  }


  function TreeList(props){
    let treeElements = props.treeArr.map(
      (treeObj) =>
      <tr>
      <td>{treeObj.name}</td>
      <td>
      <button onClick={(event,id)=>{props.onViewClick(event,treeObj.id)}}>View</button>
      <button onClick={(event,id)=>{props.onEditClick(event,treeObj.id)}}>Edit</button>
      </td>
      </tr>
    )
    return(
      <table>
      <tr>
      <th>Tree Name</th>
      <th> more information</th>
      </tr>
      {treeElements}
      </table>
    )
  }
