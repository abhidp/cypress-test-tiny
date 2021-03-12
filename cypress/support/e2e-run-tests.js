// e2e-run-tests.js
const cypress = require('cypress')

cypress
  .run()
  .then((result) => {
    //debug to see the what exactly "failures" are => returns undefined
    console.log('===== Result Failures ===== ', result.failures)

    if (result.failures) {
      console.error('Could not execute tests')
      console.error(result.message)
      process.exit(result.failures)
    }

    // print test results and exit
    // with the number of failed tests as exit code
    // process.exit(result.totalFailed)
  })
  .catch((err) => {
    console.error(err.message)
    process.exit(1)
  })
