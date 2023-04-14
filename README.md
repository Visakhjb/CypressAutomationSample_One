# CypressAutomationSample_One
Cypress Features

------IN PROGRESS-----

Notes: npm init

npm install --save-dev cypress@12.6.0

To launch Cypress: 
npx cypress open 
OR
./node_modules/.bin/cypress open

it. only -- to execyte a particular test case

Xpath support: npm install --save-dev @cypress/xpath 
Add require('@cypress/xpath'); in support/e2e.js file

Assertion Library- Chai

Cypress headless run command: npx cypress run 

Cypress headed run command: npx cypress run --headed

Chrome browser run: npx cypress run --browser chrome --headed

Run a particular test: npx cypress run -spec relativepathoffile

Run all test cases from a folder: npx cypress run 

