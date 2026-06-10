const config = require("../config");

const neutral = {
    fl: {
        shoulder: config.motors.FL_SHOULDER.defaultAngle,
        elbow: config.motors.FL_ELBOW.defaultAngle,
        hip: config.motors.FL_HIP.defaultAngle
    },

    fr: {
        shoulder: config.motors.FR_SHOULDER.defaultAngle,
        elbow: config.motors.FR_ELBOW.defaultAngle,
        hip: config.motors.FR_HIP.defaultAngle
    },

    bl: {
        shoulder: config.motors.BL_SHOULDER.defaultAngle,
        elbow: config.motors.BL_ELBOW.defaultAngle,
        hip: config.motors.BL_HIP.defaultAngle
    },

    br: {
        shoulder: config.motors.BR_SHOULDER.defaultAngle,
        elbow: config.motors.BR_ELBOW.defaultAngle,
        hip: config.motors.BR_HIP.defaultAngle
    }
};

const clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
};

const inversePositioning = (coords, left) => {

    const { x, y, z } = coords;

    let base;

    if (left && z !== 0) {
        base = neutral.fl;
   
 } else if (!left && z !== 0) {
        base = neutral.fr;
    } else if (left && z === 0) {
        base = neutral.bl;
    } else {
        base = neutral.br;
    }

    let shoulderMove = x * 10;
    let elbowMove = (y + 8) * 3;
    let hipMove = z * 8;

    let thetaShoulder;
    let thetaElbow;
    let thetaHip;
