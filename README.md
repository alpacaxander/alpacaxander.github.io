# alpacaxander.github.io

## High level overview

The goal of this project is to create a framework or shell of a project with all the necessities of a production ready app without the app part. Ideally, I can use this as a base for future projects, but I could also just have it to practice some fundamentals.

### Example Frontend

The example frontend does only logging in and logging out but it is complete with many of the features and integrations of an enterprise project.
Integrations including Auth0, analytics (Amplitude tbd), CDP (Segment tbd), session replay (datadog tbd), and payment processor (tbd);
Environments for local, local-docker, staging, production;
Infrastructure including docker with install, build, and serve stages;
Testing tbd;
Developer experience features including formatting (prettier), linting (eslint tbd), typescript, and rebuild on save for local, local-docker;

### Example Data API

This blank canvas API uses [elide](https://elide.io/) which I like because it is works around defining the model of your data and defining where the data is then building the API entirely.
Integrations including Auth0, analytics (Amplitude tbd), logging & monitoring & live profiling (datadog tbd), CDP (Segment tbd);
Environments for local, local-docker, staging, production;
Infrastructure including database change management (Liquibase tbd), docker with install, build, and serve stages;
Developer experience features including formatting, and rebuild on save for local, local-docker;

## Motivations

### Repo Structure

Much of my experience is in microservices and a long time ago I had a conversation with a colleague about separate repos for separate services or a mono repo for everything. Im a trying a mono repo for this project because I am one person working on it and seems to be convenient to have it all in one place. However, for teams large enough to have different owners for different pieces then it is probably better to organize into different repos.

### Example Frontend

I am more interested in API design but there are several frontend features that could use practice. For one, React: the functional approach has always seemed like the _right_ way to do a frontend. Whereas Angular has _too many_ ways to move data around the app; the functional approach seems to allow consistent downward dissemination of data. Authentication & oauth is fundamental to the internet now but there just hasn't been a project I joined that needed it or didn't already have it. Analytics & CDP have been incredibly valuable in past projects but the fact that they were implemented on a mature project caused several issues so having it from the start should prevent a lot of headache.

### Example Data API

API design is interesting to me because it defines the model in which the frontend uses and backend is in service of. API's are also a mature idea & technology. The good part of it being so mature is that there are really good specifications, libraries, tools, and approaches that make building an API a very easy thing \*\*. For example: this blank canvas data API will use a library called [elide](https://elide.io/) which I like because it is built around defining the model of your data and defining where the data is then building the API entirely.

### CI

CI should have, in order:
Trigger on pr open, pr update
Rebase branch onto merge target for all testing // probably artifacts
Run audit
Run linter
Run build for future steps to use the image of instead of rebuilding on each step
Run tests: unit, ui, integration, acceptance
Check test coverage
Block merge until all above are complete
Should refire after merge

### CD

CD should have:
Build production image
Deploy production image with tag:latest
If using kubernetes, kubernetes should deploy newest version itself
