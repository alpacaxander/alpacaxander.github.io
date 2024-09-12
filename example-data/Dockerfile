FROM maven:3.9.3-eclipse-temurin-17-alpine AS build
WORKDIR /workspace/app
COPY pom.xml .
COPY src src
RUN mvn install -DskipTests
FROM openjdk:17-jdk-alpine 
ARG TARGET=/workspace/app/target
COPY --from=build ${TARGET}/*.jar /app/app.jar
ENTRYPOINT ["java","-jar","app/app.jar","example.App"]
