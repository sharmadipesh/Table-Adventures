import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-style-container d-flex align-items-center">
                <img alt="logo" src="/img/table.svg" height="50px" width="40px" className="mr-2"/>
                <div className="mt-1">
                    Table Adventure
                </div>
            </div>
        );
    }
}

export default Header;