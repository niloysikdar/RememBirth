const path = require('path');
const fs = require('fs');

// load json files
const readDirectoryPath = path.join(__dirname, 'public', 'data', 'json');
const files = fs.readdirSync(readDirectoryPath);
const profiles = files.map((file) => {
  const data = JSON.parse(
    fs.readFileSync(
      `${path.join(__dirname, 'public', 'data', 'json', file)}`,
      'utf8'
    )
  );
  return {
    username: file.split('.')[0],
    ...data,
  };
});

// generate list file
const writeDirectoryPath = path.join(__dirname, 'public', 'data', 'data.json');
const output = profiles.map((profile) => ({
  name: profile.name,
  birthDate: profile.birthDate,
  imageURL: profile.imageURL,
  gitHubURL: profile.gitHubURL,
  linkedInURL: profile.linkedInURL,
  twitterURL: profile.twitterURL,
}));

fs.writeFileSync(writeDirectoryPath, JSON.stringify(output));
