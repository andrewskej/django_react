import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    posts:[]
  }

  async componentDidMount(){
    try{
      const res = await fetch('http://127.0.0.1:8000/api')
      const posts = await res.json()
      this.setState({
        posts
      })
    }catch(e){
      console.log('error:', e)
    }
  }

  render(){
    return(
      <div style={{margin:'5%', padding:'2.5%', border:'2px black solid'}}>
        <h2>React on django</h2>
        {this.state.posts.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    )
  }


}

export default App;
