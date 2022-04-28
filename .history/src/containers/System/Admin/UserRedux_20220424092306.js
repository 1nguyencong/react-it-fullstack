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
                            <div className="col-12 my-3"><FormattedMessage id="manage-user.add"/></div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.email"/></label>
                                <input className="form-control" type="email" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.password"/></label>
                                <input className="form-control" type="password" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.first-name"/></label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.last-name"/></label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.phone-number"/></label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-9">
                                <label><FormattedMessage id="manage-user.address"/></label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.gender"/></label>
                                <select className="form-control">
                                    <option selected >chose ...</option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.position"/></label>
                                <select className="form-control">
                                    <option selected >chose ...</option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.role"/></label>
                                <select className="form-control">
                                    <option selected >chose ...</option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.image"/></label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary"><FormattedMessage id="manage-user.save"/></button>
                            </div>

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