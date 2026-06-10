const linspace = require("linspace");
const {Bezier} = require("bezier-js");

const s_vals = linspace(0.0, 1.0, 30);

const xmax = 0.6;
const zmin = 2.0;
const zmax = 0.8;

const generateCurve = (nodes) => {
    const stepCurve = new Bezier(nodes);
    return s_vals.map(t => stepCurve.get(t));
};

const stepNodes = [
    {x: -xmax, y: 0, z: -zmin},
    {x: -xmax, y: 0, z: -zmax},
    {x: xmax, y: 0, z: -zmax},
    {x: xmax, y: 0, z: -zmin}
];

const slideNodes = [
    {x: xmax, y: 0, z: -zmin},
    {x: -xmax, y: 0, z: -zmin}
];

const stepPath = generateCurve(stepNodes);
const slidePath = generateCurve(slideNodes);

const basicGait = stepPath.concat(slidePath);

module.exports = basicGait;
