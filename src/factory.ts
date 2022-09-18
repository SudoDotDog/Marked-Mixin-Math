/**
 * @author WMXPY
 * @namespace MarkedMixinMath
 * @description Factory
 */

import { MarkedExportsMixinFactory } from "@sudoo/marked-mixin";
import { MarkedMathMixinMethods } from "./methods";

export const mathMixinFactory = MarkedExportsMixinFactory.fromExports(
    MarkedMathMixinMethods
);
