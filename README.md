# cypress-api-test
Just a play around repo to practice API testing with Cypress

## Overview
This framework tests the Pokemon API (pokeapi.co) and includes tests for:
- Fetching list of Pokemon
- Fetching specific Pokemon by ID
- Handling non-existent Pokemon requests
- Fetching Pokemon abilities

## Prerequisites
- Node.js installed
- npm installed

## Setup
1. Clone the repository
```bash
git clone <repository-url>
cd cypress-api-test
```

2. Install dependencies
```bash
npm install
```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npx cypress open
```
Then select "E2E Testing" and choose your preferred browser. Navigate to the `pokemon.cy.ts` file under the api folder.

### Run Tests Headlessly (Command Line)
```bash
npx cypress run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/api/pokemon.cy.ts"
```

## Test File Location
The API tests are located in:
- `cypress/e2e/api/pokemon.cy.ts`
