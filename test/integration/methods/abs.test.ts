/**
 * @author WMXPY
 * @namespace Methods
 * @description Abs
 * @override Integration Test
 */

import { MarkedResult, Sandbox } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { assertSucceedMarkedResult } from "../../util/assert-result";
import { createTestSandbox } from "../../util/sandbox";

describe('Given (Abs) Math Method for Integration Test', (): void => {

    const chance: Chance.Chance = new Chance('integration-method-abs');

    it('should be able to execute abs in sandbox', async (): Promise<void> => {

        const sandbox: Sandbox = createTestSandbox();

        const result: MarkedResult = await sandbox.evaluate('export default Math.abs(-1)');

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.equal(1);
    });

    it('should be able to execute abs in sandbox with additional argument', async (): Promise<void> => {

        const sandbox: Sandbox = createTestSandbox();
        sandbox.setAdditionalArgument(chance.string());

        const result: MarkedResult = await sandbox.evaluate('export default Math.abs(-1)');

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.equal(1);
    });
});
