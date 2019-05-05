import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ContentHeader } from '../Header'
import DashControl from '../DashControls'
import InputRange from 'react-input-range';
import Slider from '../Slider'
import '../style.css';

function Content() {
    return (
        <div className="thisContent fluid">
            <ContentHeader />
            <DashControl />
            <Slider />
            
            HELLO!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    )
}

export default Content;