

// TODO: Create a function to generate markdown for README
function generateHTML(data) {
  // return('some text');
  return  `My Team



${data.Name}



${data.Id}

## Usage

${data.Email}

## License

This application is covered under ${data.Office}

## Contribution

${data.contribution}

## Testing

${data.test}

## Questions

GitHub Username: https://github.com/${data.github}

Email: ${data.email}

`;
}
// this is just passing in the variables from earlier into text
module.exports = generateHTML;
