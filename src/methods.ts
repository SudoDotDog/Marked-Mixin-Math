/**
 * @author WMXPY
 * @namespace MarkedMixinMath
 * @description Methods
 */

export const MarkedMathMixinMethods: Record<string, any> = {

    E: Math.E,
    LN2: Math.LN2,
    LN10: Math.LN10,
    LOG2E: Math.LOG2E,
    LOG10E: Math.LOG10E,
    PI: Math.PI,

    abs: (value: number): number => {
        return Math.abs(value);
    },

    log: (value: number): number => {
        return Math.log(value);
    },
    log10: (value: number): number => {
        return Math.log10(value);
    },
    log2: (value: number): number => {
        return Math.log2(value);
    },
    log1p: (value: number): number => {
        return Math.log1p(value);
    },

    ceil: (value: number): number => {
        return Math.ceil(value);
    },
    floor: (value: number): number => {
        return Math.floor(value);
    },
    round: (value: number): number => {
        return Math.round(value);
    },

    sin: (value: number): number => {
        return Math.sin(value);
    },
    cos: (value: number): number => {
        return Math.cos(value);
    },
    tan: (value: number): number => {
        return Math.tan(value);
    },

    pow: (value: number, power: number): number => {
        return Math.pow(value, power);
    },
    sqrt: (value: number): number => {
        return Math.sqrt(value);
    },
};
