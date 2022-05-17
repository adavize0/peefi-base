const { writeFile } = require('fs');
const { argv } = require('yargs');

// Read environment variables from .env file
require('dotenv').config();

// Read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   OPENAI_KEY: "${process.env["OPENAI_KEY"]}",
};
`;

// Write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }
   console.log(`Written .env variables to ${targetPath}`);
})
