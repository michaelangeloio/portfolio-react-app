import React from "react";

function ProgressBar(props) {
    const { label, subtext, min, max, percent } = props;
    return (
        <div className="el-progress">
            {label && (
                <h5 className="el-icon" style={{marginBottom: 13}}>
                    <span className="el-icon-label">{label}</span>
                </h5>
            )}
            {subtext && (
                <p style={{fontSize: '11px', margin: 5}}><i>{subtext}</i></p>
            )}
            {percent && <span className="el-progress-count">{`% ${percent}`}</span>}
            <div className="el-progress-line">
                <div className="el-progress-bar" min={min || 0} max={max || 100} style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}

export default ProgressBar;
