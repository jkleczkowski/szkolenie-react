import React from 'react';
import logo from './logo.svg';
const myStyle = {
    backgroud: 'red',
    color: 'yellow'
}

export function Welcome({ myName, lang }) {
    return <header className="App-header" style={myStyle}>
        <img src={logo} className="App-logo" alt="logo" />

        {lang === 'pl' ? <h1 className="App-title">Witaj w React'cie {myName}</h1> : ''}
        {lang === 'en' ? <h1 className="App-title">Welcome {myName} to React</h1> : ''}

    </header>
}