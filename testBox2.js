const axios = require('axios');
async function compile() {
    const data = {
        language: "javascript",
        version: "18.15.0",
        files: [{ content: "console.log('hello pt');" }]
    };
    try {
        const res = await axios.post('https://piston.pterodactyl.io/api/v2/execute', data);
        console.log(res.data);
    } catch (e) {
        console.log('pt', e.message);
    }
}
async function compile2() {
    const data = {
        language: "javascript",
        version: "18.15.0",
        files: [{ content: "console.log('hello cc');" }]
    };
    try {
        const res = await axios.post('https://piston.codecharacter.org/api/v2/execute', data);
        console.log(res.data);
    } catch (e) {
        console.log('cc', e.message);
    }
}

compile();
compile2();
