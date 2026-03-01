const axios = require("axios");

async function testPiston() {
    const code = `
function twoSum(nums, target) {
  return [0, 1];
}
const testCases = [{"input":[[2,7,11,15],9],"output":[0,1]},{"input":[[3,2,4],6],"output":[1,2]},{"input":[[3,3],6],"output":[0,1]}];
try {
  testCases.forEach((test) => {
    const result = twoSum.apply(null, test.input);
    console.log(JSON.stringify(result));
  });
} catch (error) {
  console.error(error.message);
}
  `;

    try {
        const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
            language: "javascript",
            version: "18.15.0",
            files: [{ content: code }],
        });
        console.log(response.data);
    } catch (e) {
        console.log(e.response ? e.response.data : e.message);
    }
}
testPiston();
