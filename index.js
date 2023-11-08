//Create an alias for the first command-line argument
const breedName = process.argv[2];

const { fetchBreedDescription } = require('./breedFetcher');

//Print usage instructions and exit if the argument is missing.
if (!breedName) {
  console.log("Usage: index.js <search term>");
  process.exit(1);
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(desc);
  }
});
