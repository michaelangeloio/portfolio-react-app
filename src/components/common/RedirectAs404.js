import React from "react";
import { Redirect } from "react-router-dom";

function RedirectAs404({ location }) {
    return <Redirect to={Object.assign({}, location, { state: { is404: true } })} />;
}

export default RedirectAs404;
