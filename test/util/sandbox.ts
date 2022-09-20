/**
 * @author WMXPY
 * @namespace Util
 * @description Sandbox
 * @override Test
 */

import { Sandbox } from "@sudoo/marked";
import { markedMathMixinFactory } from "../../src";

export const createTestSandbox = (): Sandbox => {

    const sandbox: Sandbox = Sandbox.fromAllEvaluators();
    sandbox.use(markedMathMixinFactory.createInjectMixin("Math"));

    return sandbox;
};
