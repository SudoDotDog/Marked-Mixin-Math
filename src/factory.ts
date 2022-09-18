/**
 * @author WMXPY
 * @namespace MarkedMixinMath
 * @description Factory
 */

import { MarkedExportsMixinFactory } from "@sudoo/marked-mixin";
import { MarkedMathMixinMethods } from "./methods";

export const markedMathMixinFactory = MarkedExportsMixinFactory.fromExports(
    MarkedMathMixinMethods
);
