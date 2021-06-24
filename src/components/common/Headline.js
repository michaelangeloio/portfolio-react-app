import React from "react";

function Headline(props) {
    const { label, title, subtitle, divider_1, divider_2, position, className } = props;
    return (
        <header className={`el-headline ${position || "side"} ${className}`}>
            {label && (
                <div className="el-headline-label">
                    <span>{label}</span>
                </div>
            )}
            {title && (
                <h3 className="el-headline-title">
                    <span>{title}</span>
                </h3>
            )}
            {divider_1 && (
                <div>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </div>
            )}
            {divider_2 && (
                <div>
                    <div className="divider divider-1-reverse divider-1-2 divider-single"></div>
                </div>
            )}
            {subtitle && <p>{subtitle}</p>}
        </header>
    );
}

export default Headline;
