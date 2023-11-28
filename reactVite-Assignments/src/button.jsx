import React from 'react';

function Button({ text, isBold }) {
  const style = {
    fontWeight: isBold ? 'bold' : 'normal',
  };

  return (
    <button style={style}>
      {text}
    </button>
  );
}

export default Button;
