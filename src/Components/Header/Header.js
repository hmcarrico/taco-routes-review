import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
    return (
        <div>
        <NavLink to='/' >
            <button>
                Browse
            </button>
        </NavLink>

        <NavLink to='/especiales' >
            <button>
                Specials
            </button>
        </NavLink>

        <NavLink to='/memes' >
            <button>
                Memes
            </button>
        </NavLink>
        </div>
    )
    }
}
