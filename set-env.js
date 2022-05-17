const { writeFile } = require('fs');
const { argv } = require('yargs');

// Read environment variables from .env file
require('dotenv').config();

// Read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = () => environment === 'prod';
const targetPaths = [`./src/environments/environment.prod.ts`, `./src/environments/environment.ts`];

const environmentFileContent = `
export const environment = {
   production: ${isProduction()},
   OPENAI_KEY: "${process.env["OPENAI_KEY"]}",
};
`;

// Write the content to the respective file
for(let path of targetPaths){
  writeFile(path, environmentFileContent, function (err) {
    if (err) {
       throw(err)
    }
    console.log(`Written .env variables to ${path}`);
 })

}
