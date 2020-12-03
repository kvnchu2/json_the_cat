const argv = process.argv.slice(2);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  if (body.length === 2) {
    console.log('breed not found');
  } else {
    console.log(data[0].description);
  }
});


