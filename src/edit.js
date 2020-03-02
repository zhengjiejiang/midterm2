import React, { Component } from 'react';
import { LIST_PAGE_ID } from './constants';
import './App.css';

export default class UpdateView extends Component{
 constructor(props){
 super(props);
   let treeObj;
   let treeArr = JSON.parse(localStorage.getItem("Tree_Arr"));
   for (treeObj of treeArr){
   if(treeObj.id === props.id){
 console.log(treeObj);
 localStorage.setItem("Tree_Object",JSON.stringify(treeObj));
 break;
  }
 }

    this.state={
     error:"",
     message:"",
     treeArr:treeArr,
     name:treeObj.name,
     scientificName:treeObj.scientificName,
     treeImageURL:treeObj.treeImageUrl,
     seedImageURL:treeObj.seedImageUrl,
     description:treeObj.shortDescription,
 }

 this.onBackClick=this.onBackClick.bind(this);
 this.onNameChange=this.onNameChange.bind(this);
 this.onScientificNameChange=this.onScientificNameChange.bind(this);
 this.onTreeImageURLChange=this.onTreeImageURLChange.bind(this);
 this.onSeedImageURLChange=this.onSeedImageURLChange.bind(this);
 this.onDescriptionChange=this.onDescriptionChange.bind(this);
 this.onUpdateClick = this.onUpdateClick.bind(this);
 }

onBackClick(event){
 event.preventDefault();
 this.props.onPageChange(LIST_PAGE_ID)
}

onNameChange(event){
 this.setState({
 message:"",
 })

 this.setState({
 error:"",
 })

 if(event.target.value.length > 0){
   this.setState({
     name:event.target.value,
   })
 }

 else{
 this.setState({
 error:"Sorry tree name field cannot be empty!"
  })
 }

let treeArr = this.state.treeArr;
  let treeObj;
  for(treeObj of treeArr){
    if(treeObj.name.toLowerCase() === event.target.value.toLowerCase()){
      this.setState({
        message:"Tree Name Already Exists! Please Try another Name."
        })
 break;
    }
  }
}

onScientificNameChange(event){
 this.setState({
 scientificName:event.target.value,
 })
}

onTreeImageURLChange(event){
 this.setState({
 treeImageURL:event.target.value,
 })
}

onSeedImageURLChange(event){
 this.setState({
 seedImageURL:event.target.value,
 })
}

onDescriptionChange(event){
 this.setState({
 description:event.target.value,
 })
}

onUpdateClick(event){
 let treeArr = JSON.parse(localStorage.getItem("Tree_Arr"));
 let treeObj;
 for (treeObj of treeArr){
 if(treeObj.id === this.props.id){
   treeObj.name = this.state.name;
   treeObj.scientificName = this.state.scientificName;
   treeObj.treeImageUrl = this.state.treeImageURL;
   treeObj.seedImageUrl = this.state.seedImageURL;
   treeObj.shortDescription = this.state.description;
 localStorage.setItem("Tree_Object",JSON.stringify(treeObj))
 break;
 }
}

localStorage.setItem("Tree_Arr",JSON.stringify(treeArr));
  console.log(treeArr)
  alert("Successfully Updated")
  this.props.onPageChange(LIST_PAGE_ID);
}

render(){
 const { name,scientificName,treeImageURL,seedImageURL,description } = this.state;
 return(
   <div>
     <h1>Edit</h1>
     <div className="validation-error">
     {this.state.error}
  </div>
 <br />

 <input type="text" value={name} onChange = {(event)=>this.onNameChange(event)}/>

 {" "}{this.state.message === "Tree Name Already Exists! Please Try another Name." &&

 <div className="validation-error"> {this.state.error} </div>
 }

 <br />
 <br />

 <input type="text" value={scientificName} onChange = {(event)=>this.onScientificNameChange(event)} />

 <br />
 <br />

 <input type="text" value={treeImageURL} onChange = {(event)=>this.onTreeImageURLChange(event)}/>

 <br />
 <br />

 <input type="text" value={seedImageURL} onChange = {(event)=>this.onSeedImageURLChange(event)}/>

 <br />
 <br />

 <textarea type="text" value={description} onChange = {(event)=>this.onDescriptionChange(event)}/>

 <br />
 <br />

 <button onClick={(event)=>this.onUpdateClick(event)}>Save</button>

 <br />
 <br />

 <button onClick={(event)=>this.onBackClick(event)}>Back</button>
 </div>
 );
 }
}
