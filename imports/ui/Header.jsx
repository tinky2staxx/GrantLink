import React from 'react';

const Header = () => {

    return (
        <div className="container">
            <div className="navbar navbar-default navbar-fixed-top grantBlock">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Grant Link</a>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Header;