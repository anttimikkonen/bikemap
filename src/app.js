import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import HeaderComponent from './components/HeaderComponent';

const Index = () => {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
