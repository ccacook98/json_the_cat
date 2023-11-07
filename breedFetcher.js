//Print usage instructions and exit if the argument is missing.
if (!process.argv[2]) {
  console.log("Usage: breedFetcher.js <search term>");
  process.exit(1);
}
const request = require('request');
//Construct URL from 1st argument and the following literal
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2]

request.get(URL, function (error, response, body) {
  //Print error ID and exit if error encountered
  if (error) {
    console.error(error);
    process.exit(2);
  }
  
  //Parse the result
  const data = JSON.parse(body);
  //Check for empty response
  if (data.length > 0) {
    //Print the description field of the response
    console.log(data[0].description);
  } else {
    //Assume no match was found for the search query
    console.log("No match found (server returned blank response)");
  }
});


