FROM adoptopenjdk/openjdk11-openj9:alpine-jre

ADD ./target/recommendationservice-0.0.1-SNAPSHOT.jar /usr/src/recommendationservice-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "recommendationservice-0.0.1-SNAPSHOT.jar"]

EXPOSE 8096
