const axios = require("axios").default;
const chalk = require("chalk");

// Array of URLs to check
const urls = [
  "http://knollelias.ch",
  "http://ehrhardtphilipp.ch",
  "http://peaksolution.ch",
  "http://knollbackend1.ch",
];

// 000-default.conf                knollelias.conf
// bubblegum.peaksolution.conf     odyssey.peaksolution.conf
// default-ssl.conf                peaksolution.conf
// ehrhardtphilipp.ch.conf         peaksolution-le-ssl.conf
// ehrhardtphilipp.ch-le-ssl.conf  sherifi.peaksolution.ch.conf
// galaxy.peaksolution.conf        sherifi.peaksolution.ch-le-ssl.conf
// knollbackend1.conf

urls.forEach((url) => {
  axios
    .get(url, { timeout: 10000 })
    .then((response) => {
      if (response.status === 200) {
        console.log(chalk.green(`${url} responded OK`));
      } else {
        console.log(
          chalk.yellow(`${url} responded with status code: ${response.status}`)
        );
      }
    })
    .catch((error) => {
      if (error.response) {
        console.log(
          chalk.yellow(
            `${url} responded with status code: ${error.response.status}`
          )
        );
      } else if (error.request) {
        console.log(chalk.red(`${url} failed to respond`));
      } else {
        console.log(chalk.red(`Error in accessing ${url}: ${error.message}`));
      }
    });
});
