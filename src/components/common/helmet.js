import React from "react";
import { Helmet } from "react-helmet";

function PageHelmet(props) {
    const { title, description, children } = props;

    return (
        <Helmet>
            <title>{title} || React Multipurpose Template</title>
            {description && <meta name="description" content={description} />}
            {children}
        </Helmet>
    );
}

export default PageHelmet;
