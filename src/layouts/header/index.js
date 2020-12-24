import React from "react";
import * as service from "../../utils/services";
import {HeaderBox,HeaderContainer} from "./styles";
import PropTypes from "prop-types";

const handleMainPage = e =>{
    e.preventDefault();
    service.mainPage();
};

const cartOpen = e =>{
    e.preventDefault();
    service.cartOpen();
};

const handleLogOut = e =>{
    e.preventDefault();
    service.logOut();
};


const Header = props => {
    return (
        <HeaderBox>
            <HeaderContainer>
            <h1>{props.title}</h1>
            {props.btn
                &&
                <div className="btns">
                <button className="btn main" onClick={handleMainPage}>Plants Catalog</button>
                </div>
                }

            {props.btn
                &&
                <div className="btns">
                    <button className="btn cart" onClick={cartOpen}>Cart</button>
                </div>   
                }


            {props.btn
                &&
                <div className="btns">
                <button className="btn logout" onClick={handleLogOut}>Logout</button>
                </div>
                }
                
            </HeaderContainer>
        </HeaderBox>
    );
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
    btn: PropTypes.bool
};
export default Header;