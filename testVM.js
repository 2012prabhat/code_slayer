const vm = require('vm');

async function testVM() {
    const code = `
function twoSum(nums, target) {
  return [0, 1];
}
  `;
    const handlerFunction = "twoSum";
    const testCases = [
        { input: [[2, 7, 11, 15], 9], output: [0, 1] },
        { input: [[3, 2, 4], 6], output: [1, 2] }
    ];

    try {
        const sandbox = {};
        vm.createContext(sandbox);

        // execute user code
        vm.runInContext(code, sandbox);

        for (let i = 0; i < testCases.length; i++) {
            const { input, output } = testCases[i];
            // call handler
            const res = vm.runInContext(`
        ${handlerFunction}.apply(null, ${JSON.stringify(input)})
      `, sandbox);
            console.log('Result:', res, 'Expected:', output);
        }
    } catch (error) {
        console.error(error.message);
    }
}
testVM();
