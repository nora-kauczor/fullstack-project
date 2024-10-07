# setup platform (optional) and java version to use
FROM --platform=linux/amd64 openjdk:21
# expose on port 8080 (optional)
EXPOSE 8080
# include our packaged app, give it the same name as the file
ADD backend/target/fullstack.jar fullstack.jar
# entrypoint takes array of commands to auto-execute in console
# (spaces auto-inserted between elements)
ENTRYPOINT ["java", "-jar", "fullstack.jar"]
