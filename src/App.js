import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Count from './components/Count'
import FunctionClick from './components/FunctionClick'
import Binding from './components/Binding'
import Parent from './components/Parent'
import Condition from './components/Condition'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
import Fragment from './components/Fragment'
import Purecomponent from './components/Purecomponent'
import Parentcomponent from './components/Parentcomponent';

function App() {
  return (
    <div className="App">
    <Parentcomponent/>
    {/* <Purecomponent/> */}
    {/* <Fragment/> */}
    {/* <Form/> */}
    {/* <Stylesheet isLogged={false}/> */}
    {/* <NameList/> */}
    {/* <Condition/> */}
    {/* <Parent/> */}
    {/* <FunctionClick/> */}
    {/* <Binding/> */}
    {/* <Message/> */}
    {/* <Count/> */}
     {/* <Greet name="Raka">
     <p> This is children area</p>
     </Greet>
     <Greet  name="Tusi">
     <button>Add</button>
     </Greet>
     <Greet  name="Romi"></Greet>
     <Welcome original="Anindita"/>
     <Welcome original="Prateeksha"/>
     <Welcome original="Suparna"/> */}
    </div>
  );
}

export default App;
