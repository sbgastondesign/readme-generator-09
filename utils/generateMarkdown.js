// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${data.goal}
# ${data.motivation}
# ${data.solution}
# ${data.learned}
# ${data.special_feature}
# ${data.challenges}
# ${data.improvement}
# ${data.deployed_link}
# ${data.summary}
# ${data.github}
# ${data.usage}
# ${data.contributions}
# ${data.tests}
# ${data.github_username}
# ${data.github_account}
# ${data.email}`
}

module.exports = generateMarkdown;
