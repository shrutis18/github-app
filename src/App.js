import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props)
   this.state = {name: ''}
  }
  onChangeName = (e) => {
  console.log('e', e.target.value)
  //this.state.name = e.target.value
  this.setState({name: e.target.value})
  }

  render() {
    let user = this.props.users
  let searchResults = []
  if(this.props.users) {

  for(let i =0 ;i< 3;i++) {
    searchResults.push(<tr>
    <img className ='photo' src ={user[i].avatar_url}/>
    <tr> <th>{user[i].login}</th>  </tr>
    <tr> <th> Profile </th> <td>{user[i].url} </td>  </tr>
    <tr> <th> Score </th> <td>{user[i].score} </td>  </tr>
    <tr> <th> Organization </th> <td>{user[i].organizations_url} </td> <button onClick = {() => {this.getDetails}}>Details</button>  </tr>
    </tr>
    )}
  }
  else {
  searchResults.push(<tr><td>No Data </td></tr>)
  }
    return (
    <div>
      <div className = 'header'>
      <form onSubmit = {(e) => {this.props.fetchUsers(e, this.state.name)}}>
      <input id='name' type ='text' className = 'sortByName' value = {this.state.name} onChange ={e => {this.onChangeName(e)}}/>
      </form>
      </div>
      <div className = 'content'>
      <table>
      <tbody>
      {searchResults}
      </tbody>
      </table>
      </div>
      </div>
    );
  }
}

export default App;
