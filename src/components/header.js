import React from "react";
import {NavLink} from "react-router-dom";



const HeaderSection = () => {
    return (
        <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/http.shop">Shop for You</NavLink></li>
                        <li><NavLink to="/http.single.product">Single product</NavLink></li>
                        <li><NavLink to="/http.cart">Cart</NavLink></li>
                        <li><NavLink to="/http.checkout">Checkout</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    )
}



export default HeaderSection;