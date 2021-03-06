import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="user-redux-container">
                <div className="title">
                    UserRedux hoi dan it nguyễn văn công 
                </div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">Them moi nguoi dung</div>
                            <div className="col-3">
                                <label>Email</label>
                                <input className="form-control" type="email" />
                            </div>

                            <div className="col-3">
                                <label>Password</label>
                                <input className="form-control" type="password" />
                            </div>

                            <div className="col-3">
                                <label>First Name</label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label>Last Name</label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label>Phone Number</label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-9">
                                <label>Address</label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label>Gender</label>
                                <select className="form-control">
                                    <option selected >chose ...</option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label>Position</label>
                                <select className="form-control">
                                    <option selected >chose ...</option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label>RoleID</label>
                                <select className="form-control">
                                    <option selected >chose ...</option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label>Image</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <button className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
