//import logo from './logo.svg';
import './App.css';
import Post from "./components/Post"
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className ="App">
        <Post></Post>
      </div>
    )
  }
}

export default App;
