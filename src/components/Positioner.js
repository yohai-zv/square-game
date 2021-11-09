import { useState } from 'react';
import './Positioner.css';

function Positioner({ children }) {

  const [{ left, top }, setPosition] = useState({ left: '50', top: '50' })

  const moveUp = () => setPosition(({ left, top }) => ({ left, top: top - 1 }));
  const moveDown = () => setPosition(({ left, top }) => ({ left, top: top + 1 }));
  const moveRight = () => setPosition(({ left, top }) => ({ left: left + 1, top }));
  const moveLeft = () => setPosition(({ left, top }) => ({ left: left - 1, top }));


  const childrenStyle = { left: left + '%', top: top + '%', position: 'absolute' };
  return (
    <div className="container">
      <header className="top">
        <button className="horizontalButton" onClick={moveUp}></button>
      </header>
      <div className="innerContainer">
        <button className="verticalButton" onClick={moveLeft}></button>
        <div className="content">
          {children(childrenStyle)}
        </div>
        <button className="verticalButton" onClick={moveRight}></button>
      </div>
      <footer className="footer">
        <button className="horizontalButton" onClick={moveDown}></button>
      </footer>
    </div >
  );
}

export default Positioner;
