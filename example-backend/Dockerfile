# DEPENDENCY STAGE
FROM maven:3.9.3-eclipse-temurin-17-alpine AS build
WORKDIR /workspace/app
COPY pom.xml .
RUN ["/usr/local/bin/mvn-entrypoint.sh", "mvn", "verify", "clean", "--fail-never"]
# START STAGE
COPY src src
ENTRYPOINT ["mvn", "spring-boot:run"]