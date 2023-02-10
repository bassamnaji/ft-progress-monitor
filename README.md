# ft-progress-monitor
```ft-progress-monitor``` is a tool that helps 42 students in monitoring their progress through the Common Core. It provides set of features that help the student to meet their milestones and organize these plans in one space.
It also provides the staff the ability to access dashboards, diagrams and groups to easily track students progress.

## Usage
run the following script to copy .env.example files onto .env files and check if you have docker available in your machine
```bash
./scripts/setup.sh
```
Then run the following command to setup the whole environment for the reverse proxy, frontend, backend and database.
```bash
# latest version of docker compose
docker compose up
# Or using the old version of docker compose
docker-compose build
docker-compose up
```
