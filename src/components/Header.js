import React from 'react';
import Button from './Button';
import './Header.css';

const Header = (props) => {
    const onClick = () =>{
        console.log('Click');
    }
    return (
        <div className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick} />

        </div>
    )
}

export default Header;