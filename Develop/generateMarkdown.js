// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Project Description
  ${data.projectDescription}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contributions)
  * [Tests](#tests)
  * [Questions?](#questions)
  ## Installation
  After cloning or downloading a local copy of the repository, from a terminal install the required dependencies that are listed in the package.json file:
  \`\`\`
  npm install
  \`\`\`
  Once the node_modules folder is created and all dependencies are downloaded, type the following in your terminal:
  ${appRunCommand(data.runCommand)}
  ## Contribute
  ${data.projectContribute}
  ## Tests
  ${data.projectTests}
  ## Questions?
  I enjoy hearing back about my work. You can reach me at ${data.email}.
  Alternatively, contact me on my GitHub page <a href="https://github.com/${data.github}">here</a>.
`;
}

module.exports = generateMarkdown;
