// Imports \\
const axios = require('axios');

// Global Variables \\
var apiKey = "";

// Functions \\
module.exports.getGlobalStats = () => {
    axios.get(`https://configs.club/api/users/list.php`, (err, res) => {
        if(err) return console.log(err);
        console.log(res.data);
        // return JSON.parse(res.data);
    })
}

// Main \\
const setup = (apiKey) => {
    if(apiKey.length <= 0) return console.log("Please enter an API key");
    this.apiKey = apiKey;
    return this;
}

// Export \\
module.exports = setup;