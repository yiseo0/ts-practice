import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }
  return (

    <Greetings name="이서" onClick={onClick} />
  );
};

export default App;