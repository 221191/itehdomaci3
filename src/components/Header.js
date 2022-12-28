import React from 'react';
import Button from './Button';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.title}</h1>
            <Button text='Add' onClick={(event) =>  window.location.href='/addtodo'} />
        </div>
    )
}

export default Header;