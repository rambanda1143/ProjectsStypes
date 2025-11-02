import { Component } from "react";

import './index.css'
class Header extends Component{
    render() {
        return (
             <nav className="navbar">
                <div className="header-container">
                    <div className="title-head">
                          <h3 className="header-head">Ra</h3>

                    </div>
                   
                     <ul className="container-list">
                        <li className="list-container">
                         <img
                            className="social-network-img"
                            src='/linkedin.png'
                            alt="Linked In"
                        />
                        </li>
                         <li  className="list-container">
                            <img
                                className="social-network-img"
                                src='/git.png'
                                alt="Git Hub"/>
                        </li>
                         <li  className="list-container">
                            <img
                                className="social-network-img"
                                src="/twitter.png"
                                alt="Twitter"
                            />
                        </li>
                    </ul>

                </div>
             </nav>  
        );
    }
}

export default  Header