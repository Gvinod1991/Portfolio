import React from 'react';
const About = () => {
    return <header>
        <nav className="navbar navbar-default navbar-fixed-top navbar-inverse font-header">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" id="green-terminal" href="/">Kod3r@kod3r-dev ~ $</a>
            </div>

            
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/">/home/kod3r</a>
                    </li>
                    
                    
                    <li className="dropdown">
                        
                        <a href="/about">~/about</a>
                        
                    </li>
                    
                    
                    <li className="dropdown">
                        
                        <a href="/projects">~/projects</a>
                        
                    </li>
                    

                </ul>
            </div>
        </div>
    </nav>
    </header>
};

//Module Exports
export default About;