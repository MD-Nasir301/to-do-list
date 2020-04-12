import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="header-top">
                <div className="logo">
                    <h4>To Do</h4>
                </div>
                <div className="dark-mode">
                    <h4>Dark</h4>
                    <input type="checkbox" name="" id=""/>
                </div>
            </div>
            <div className="date-time">
                <div className="row">
                    <div className="col-md-7">
                        <div className="date">
                            <h5>Date : <span> 05-04-2020 </span>  </h5>
                        </div>
                    </div>
                    {/* <div className="col-md-2"></div> */}
                    <div className="col-md-4">
                        <div className="time">
                            <h5>Time : <span>08 : 48 PM</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;