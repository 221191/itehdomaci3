import React from 'react';
import Button from './Button';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.title}</h1>
            <Link to="/addtodo"><Button text='Add'/></Link>
        </div>
    )
}

export default Header;