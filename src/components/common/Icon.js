import React from "react";

function Icon(props) {
    const { label, title, small, subtitle, children, className } = props;

    return (
        <div className={`el-icon ${className}`}>
            <div className="el-icon-circle">
                <div className="el-icon-inner">{children}</div>
            </div>
            {label && <span className="el-icon-label">{label}</span>}
            {title && <span className="el-icon-title">{title}</span>}
            {subtitle && (
                <span className="el-icon-subtitle">
                    {subtitle} {small && <span className="el-icon-small">{small}</span>}
                </span>
            )}
        </div> 
    );
}
export default Icon;
