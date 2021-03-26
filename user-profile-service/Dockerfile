FROM openjdk:11

ADD ./target/userprofileservice-0.0.1-SNAPSHOT.jar /usr/src/userprofileservice-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "userprofileservice-0.0.1-SNAPSHOT.jar"]

EXPOSE 8111
