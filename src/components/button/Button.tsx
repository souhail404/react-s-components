import React from 'react'

interface BuutonProps {
    label : string,
};

const Button = (props: BuutonProps) => {
  return (
    <button>{props.label}</button>
  );  
};

export default Button;