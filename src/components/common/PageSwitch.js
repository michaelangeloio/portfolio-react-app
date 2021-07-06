import React from "react";
import { spring, AnimatedSwitch } from "react-router-transition";

function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2,
        rotate: 0,
    },
    atLeave: {
        opacity: bounce(1),
        scale: bounce(1),
        rotate: 0,
    },
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
        rotate: bounce(0),
    },
};

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transition: `all 180ms linear`,
        transform: `scale(${styles.scale}) rotate(${styles.rotate}deg)`,
    };
}

function Switch(props) {
    const { children } = props;
    
    return (
        <AnimatedSwitch atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
            {children}
        </AnimatedSwitch>
    );
}

export default Switch;
