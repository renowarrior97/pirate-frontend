import React from 'react';

export default function Navbar(props){
    return (
        <div>
            <ul id="nav">
                <li><a href='/'>Home</a></li>
                <li><a href='/users'>Users</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </div>
    )
}