FROM adoptopenjdk/openjdk11-openj9:alpine-jre

ADD ./target/delivery-service-0.0.1-SNAPSHOT.jar /usr/src/delivery-service-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "delivery-service-0.0.1-SNAPSHOT.jar"]

EXPOSE 8095