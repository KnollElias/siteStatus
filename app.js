const axios = require('axios');
const chalk = require('chalk');

// Array of URLs to check
const urls = ['http://example.com', 'http://another-example.com'];

urls.forEach(url => {
    axios.get(url, { timeout: 10000 })
        .then(response => {
            if (response.status === 200) {
                console.log(chalk.green(`${url} responded OK`));
            } else {
                console.log(chalk.yellow(`${url} responded with status code: ${response.status}`));
            }
        })
        .catch(error => {
            if (error.response) {
                console.log(chalk.yellow(`${url} responded with status code: ${error.response.status}`));
            } else if (error.request) {
                console.log(chalk.red(`${url} failed to respond`));
            } else {
                console.log(chalk.red(`Error in accessing ${url}: ${error.message}`));
            }
        });
});
