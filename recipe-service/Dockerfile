FROM adoptopenjdk/openjdk11-openj9:alpine-jre

ADD ./target/recipe-service-0.0.1-SNAPSHOT.jar /usr/src/recipe-service-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "recipe-service-0.0.1-SNAPSHOT.jar"]