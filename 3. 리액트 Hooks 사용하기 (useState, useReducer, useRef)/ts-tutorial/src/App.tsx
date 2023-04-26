import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import Counter2 from './components/Counter2';
import ReducerSample from './components/ReducerSample';

function App() {
  const onSubmit = (form: { name: string, description: string }) => {
    console.log(form)
  }

  return (
    <>
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <Counter2 />
      <ReducerSample />
    </>
  );
}

export default App;
