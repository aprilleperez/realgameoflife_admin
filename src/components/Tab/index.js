import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    // sets props to required data type
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    // fires on click event, passes "label" with onClick
    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        // declares this to const variables
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        // sets class name 
        let className = 'tab-list-item';

        // adds active class to clicked label
        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label}
            </li>
        );
    }
}


export default Tab;