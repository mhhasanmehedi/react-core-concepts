import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I'm mehedi hasan</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle ={
    border:"2px solid red",
    margin:'30px',
    padding:'20px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: Sakib khan</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
