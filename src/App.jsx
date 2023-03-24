import React from 'react';
import Header from './components/header';
import Main from './components/main'
import './style.scss';

const App = () => {
    return (
        <div className="container">
            <Header />
            <Main />
        </div>
    )
}

export default App