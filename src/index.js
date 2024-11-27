import React from 'react';
import ReactDOM from 'react-dom/client';

function HelloWorld() {
  return <h1>Hola desde React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld />);