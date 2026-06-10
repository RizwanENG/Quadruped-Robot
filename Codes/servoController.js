const chalk = require('chalk');
const config = require('../config');
const utils = require('./utils');

let i2cBus;
let Pca9685Driver;
let pca9685ODevice;

try {
    i2cBus = require('i2c-bus');
    Pca9685Driver = require('pca9685').Pca9685Driver;
    console.log(chalk.green('Hardware libraries OK!'));
} catch (error) {
    console.log(chalk.yellowBright('Hardware libraries not available! Simulating servo output.'));
    i2cBus = require('./dummyHardware').dummyI2C
    Pca9685Driver = require('./dummyHardware').dummyPCA
}

const pca9685Options = {
    i2c: i2cBus.openSync(config.pca9685.i2cDevice),
    address: config.pca9685.address,
    frequency: config.pca9685.frequency,
    debug: config.pca9685.debug
};

class Servo {

    channel = 0;
    offset = 0;
    isReady = false;
    isBusy = false;

    constructor(motor) {
        this.channel = motor.channel;
        this.offset = motor.offset;
    }

    init() {
        pca9685ODevice.setPulseRange(this.channel, 500, 2500)
       
 this.isReady = true;
    }

    setAngle(degrees) {

        if (!this.isBusy) {

            this.isBusy = true;

            let newDegrees = degrees + this.offset

            if (newDegrees < 0) newDegrees = 0;
            if (newDegrees > 360) newDegrees = 360;

            const pulseLength = utils.mapNumber(newDegrees, 0, 180, 500, 2500)

            pca9685ODevice.setPulseLength(
                this.channel,
                pulseLength,
                2500,
                () => this.isBusy = false
            )
        }
    }
}
