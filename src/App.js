import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Sakib', 'Alomgir', 'Salman', 'Premik', 'Bapparaj', 'Razzak'];
  const nameArry = ['Mehedi', 'Pranta', 'Bipul', 'Misty', 'Ashik'];
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '60.40' },
    { name: 'PDF Reader', price: '$9.99' },
    { name: 'Premiere EI', price: '$249.99' },
    { name: 'Computer', price: '$800.54' }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <p>I'm a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }


        <Dream name={nameArry[0]} dream="Web Developer"></Dream>
        <Dream name={nameArry[1]} dream="Govt Officer"></Dream>
        <Dream name={nameArry[2]} dream="Banker"></Dream>
        <Dream name={nameArry[3]} dream="BCS Cadre"></Dream>
        <Dream name={nameArry[4]} dream="Biker"></Dream>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: '1px solid solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgreen',
    width: '400px',
    padding: '20px',
    margin: '30px',
    lineHeight: '0.8',
    boxSizing: 'border-box',
    boxShadow: 'rgb(251 248 247) 0px 0px 7px 8px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h1>Price: {price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Dream(props) {
  const dreamStyle = {
    border: '2px solid orange',
    width: '400px',
    margin: '30px',
    backgroundColor: 'black'
  }
  return (
    <div style={dreamStyle}>
      <h1 style={{ color: 'red' }}>Name: {props.name}</h1>
      <h2 style={{ color: 'yellow' }}>Dream: {props.dream}</h2>
    </div>
  )
}

export default App;
