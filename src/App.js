import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search/search.components';
console.log(this)
class App extends Component {
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField:''
    }
  }
  handleChange=(e)=>{
    this.setState({ searchField : e.target.value })
    }
  async componentDidMount(){
    try{
      const fetchURL= await fetch('https://jsonplaceholder.typicode.com/users')
      const response= await fetchURL.json()
      this.setState({monsters:response})
    }
    catch(e)
    {
      console.log(e)
    }
  }

  render(){ 
    const headings="Monster's Rolodex"
   const {monsters,searchField}=this.state
   const filteredMonster =monsters.filter(
     monster=>monster.name.toLowerCase().includes(searchField.toLowerCase())   
   )
  
    return (  
    <div className="App">
    <h1>{headings}</h1>
    <SearchBox handleChange={this.handleChange} placeholder='Monster'/>
    <CardList monsters={filteredMonster}></CardList>
    </div>
    )}
}
export default App
