import React from 'react';
import { RecoilRoot } from 'recoil';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Nav />
      <Body />
    </RecoilRoot>
  );
}

function Nav() {
  return <div className="Nav"></div>;
}

function Body() {
  return (
    <div className="Body">
      <Profile />
    </div>
  );
}

export default App;
