import React from "react";

import FormInput from "../controls/form-input/form-input.component";
import CustomButton from "../..//components/custom-button/custom-button.component";

import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="displayName"
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={email}
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        required
                        onChange={this.handleChange}
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
