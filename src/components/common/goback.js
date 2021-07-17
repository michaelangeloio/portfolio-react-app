import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = ({ history }) => (
    <button className="button button-go-back el-go-back" onClick={() => history.goBack()}>
        <span className="icon ti-back-left" />
        <span className="text">Back</span>
    </button>
);

export default withRouter(GoBack);
