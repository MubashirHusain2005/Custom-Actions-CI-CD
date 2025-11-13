const core = require('@actions/core');

try {
    // Get input from the workflow
    const nameToGreet = core.getInput('who-to-greet');

    // Correct way to log using template literals
    console.log(`Hello, ${nameToGreet}!`);

    // Set output variable for other steps
    core.setOutput('time', new Date().toTimeString());

} catch (error) {
    // Mark the action as failed if something goes wrong
    core.setFailed(error.message);
}

