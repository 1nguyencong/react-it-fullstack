import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleOnChangeInput = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }


    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = () => {

    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12  text-login">Login</div>
                        <div className="col-12 form-group login-input" >
                            <label>UserName</label>
                            <input type="text" className="form-control" placeholder="Enter your username"
                            value={this.state.username}
                            onChange={(event) => this.handleOnChangeInput(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <div >
                                <input type="text" className="form-control" placeholder="Enter your password"
                                value={this.state.password}
                                onChange={(event) => {this.handleOnchangePassword(event)}}
                                />
                                <i class="fas fa-eye"></i>
                            </div>
                        </div>
                        <div className="col-12">
                        <button className="btn-login" onClick={() => this.handleLogin()}>Login</button>
                        </div>

                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="test-other-login">Or Login with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
