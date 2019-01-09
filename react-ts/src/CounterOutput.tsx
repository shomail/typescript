import * as React from 'react';

interface ICounterProps {
  counter: number;
}

const counterOutput = (props: ICounterProps) => {
  return <h1 style={{ textAlign: 'center' }}>{props.counter}</h1>;
};

export default counterOutput;
