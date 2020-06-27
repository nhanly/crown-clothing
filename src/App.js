import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
    unsubscribeFromAuth = null;

    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/shop" component={ShopPage}></Route>
                    <Route path="/signin" component={SignInAndSignUp}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
