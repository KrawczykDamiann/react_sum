import React from 'react';
import './App.scss';

export const Sum = ({ a = 0, b = 0 }) => {
  const sum = a + b;

  return (
    <p>
      Sum of {a} and {b} is {sum}
    </p>
  );
};

export const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
  </>
);
