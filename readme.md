# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

In order to run this repo on a new machine you will need:

1. Download and install [Docker](https://docs.docker.com/get-docker/) on your machine.
2. Open your terminal and from the root directory run `docker-compose up`. Wait for the server to be ready.
3. In your browser, visit http://localhost:3000/api/ping to check that everything works ok.
4. In your browser, visit http://localhost:3001/register to register a new local user for yourself.
