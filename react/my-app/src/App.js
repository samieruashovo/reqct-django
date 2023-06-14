import './App.css';
import React from 'react';
import Name from './components/name';
import Example from './components/example';
import Example2 from './components/example2';
import Form from './components/Form';
import MyFragment from './components/myfragment';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import FetchData from './components/FetchData';
import ComponentAA from './components/ComponentAA';
import UseReducer from './components/UseReducer';
import DataFetching from './components/DataFetching';


export const MyContext = React.createContext();

export const MyContext2 = React.createContext();
function App() {
  function clicked() {
    alert('class component clicked')
  }
  return (
    <div className="container">
      <DataFetching />
      {/* <MyContext2.Provider value="this is context value">

        <ComponentAA />

      </MyContext2.Provider> */}
      {/* <UseReducer/> */}

      {/* <Name /> */}
      {/* <Example names={['pyhton', 'java', 'javascripts', 'c#']} />
      <Example2 names={['React', 'React Native', 'Django', 'c#']} />
      <Form /> */}

      {/* <MyFragment /> */}
      {/* <MyContext.Provider value="This is a value from context">
        <ComponentA />
      </MyContext.Provider> */}
      {/* <Counter
      />
      <CounterHook /> */}
      {/* <FetchData /> */}

    </div>
  );
}

export default App;
