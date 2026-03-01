const axios = require('axios');
async function compile() {
    const data = {
        compiler: "nodejs-head",
        code: "console.log('hello world');"
    };
    try {
        const res = await axios.post('https://wandbox.org/api/compile.json', data);
        console.log(res.data);
    } catch (e) {
        console.log(e.message);
    }
}
compile();
