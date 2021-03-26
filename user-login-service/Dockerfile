FROM adoptopenjdk/openjdk11-openj9:alpine-jre

ADD ./target/user-login-service-0.0.1-SNAPSHOT.jar /usr/src/user-login-service-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "user-login-service-0.0.1-SNAPSHOT.jar"]

EXPOSE 8081