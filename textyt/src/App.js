
import React, { useState } from  'react';
import { Component } from 'react';
import './App.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Logged in with:', username, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <label className="l1">ENTER USERNAME:-</label>
       <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />      <br/>
       <label className="l2">ENTER PASSWORD:-</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <a  href='http://localhost:3000/'><button className="b1" type="submit">Login</button></a>
    </form>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleClick = (value) => {
    this.setState({
      input: this.state.input + value,
    });
  };

  clear = () => {
    this.setState({
      input: '',
    });
  };

  calculate = () => {
    try {
      this.setState({
        input: eval(this.state.input),
      });
    } catch (e) {
      this.setState({
        input: 'Error',
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <input className="display" type="text" value={this.state.input} readOnly />
        <div className="buttons">
          <button onClick={() => this.handleClick('1')}>1</button>
          <button onClick={() => this.handleClick('2')}>2</button>
          <button onClick={() => this.handleClick('3')}>3</button>
          <button onClick={() => this.handleClick('+')}>+</button>
          <button onClick={() => this.handleClick('4')}>4</button>
          <button onClick={() => this.handleClick('5')}>5</button>
          <button onClick={() => this.handleClick('6')}>6</button>
          <button onClick={() => this.handleClick('-')}>-</button>
          <button onClick={() => this.handleClick('7')}>7</button>
          <button onClick={() => this.handleClick('8')}>8</button>
          <button onClick={() => this.handleClick('9')}>9</button>
          <button onClick={this.clear}>C</button>
          <button onClick={() => this.handleClick('0')}>0</button>
          <button onClick={() => this.handleClick('.')}>.</button>
          <button onClick={this.calculate}>=</button>
        </div>
      </div>
    );
  }
}
function MyButton() {
  return (
    <a  href='http://localhost:3000/'><button className='b'>
    LOGIN
  </button>    </a>
  );
}
const user = {
  name: 'MD SHAHZEB SAFEEL',
  imgUrl: 'https://i.pinimg.com/736x/c5/d5/24/c5d524050a24be0d275f4e3f3fe57f4d.jpg',
  imagesize : 200 ,
  imagesize2 :300 ,
};

export default function MyApp() {
  return (
    
    <div className='d1'>
      <h1>WELCOME TO MY APP</h1>
      <MyButton />
      <p><b>APP MADE BY:</b></p>
      <h2>{user.name}</h2>
      <img className="avator" alt=""
      src={user.imgUrl}
      style={{
        width: user.imagesize2,
        height: user.imagesize,
      }}
      />
      <LoginForm />
   
      <div className="d2"> <App/> 
      </div>
      </div>
    
  );
}
