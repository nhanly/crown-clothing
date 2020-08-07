import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionDiv,
} from "./header.styles";
import { Link } from "react-router-dom";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionDiv as={Link} to="/shop">
                SHOP
            </OptionDiv>
            <OptionDiv as={Link} to="/contact">
                CONTACT
            </OptionDiv>
            {currentUser ? (
                <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
            ) : (
                <OptionDiv as={Link} to="/signin">
                    SIGN IN
                </OptionDiv>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
