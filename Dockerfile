FROM openjdk:8
EXPOSE 8080
ADD target/RMS-final.jar RMS-final.jar
ENTRYPOINT ["java","-jar","/RMS-final.jar"]