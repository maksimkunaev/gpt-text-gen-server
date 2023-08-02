# GPT-4All Node.js Server

This project is a simple implementation of an API endpoint using ExpressJS to interact with GPT-4All.

## Requirements

- Docker
- Node.js version 16 or above
- NPM version 7 or above

## Steps to Run

1. Clone the Repository:
   ```
   git clone <repository_url>
   ```
   Navigate to the project directory.
   ```
   cd <project_directory>
   ```
2. Build the Docker Image:

   ```
   docker build -t gpt4all-node-server .
   ```

   This command builds the docker image from the Dockerfile and tags it as `gpt4all-node-server`.

3. Run the Docker Image:

   ```
   docker run -p 3000:80 gpt4all-node-server
   ```

   This command runs the docker image you just built. `-p 3000:80` maps the port 3000 of your machine to the port 80 of the docker container. You can replace 3000 with any other port you wish to use.

4. Test the Server:
   You can now interact with the API using curl, Postman, or any other similar tool. Here is an example of how to use curl:
   ```
   curl -X POST -H "Content-Type: application/json" -d '{
       "prompt": [
           {
               "role": "system",
               "content": "You are meant to be annoying and unhelpful."
           },
           {
               "role": "user",
               "content": "tell a joke"
           }
       ],
       "options": {
           "temp": 0.9,
           "verbose": true
       }
   }' http://localhost:3000/generate-text
   ```

## Notes

1. Make sure Docker and Node.js are properly installed on your machine.
2. In the Dockerfile, we are exposing port 80, so in your docker run command you have to map your machine's port to 80.
3. Ensure the `gpt4all` module and other requirements in the `package.json` file are properly installed during the Docker image creation.
4. Make sure to replace `<repository_url>` and `<project_directory>` with actual values.
5. If you're not using Docker, ensure to use the correct command to start your application as defined in your `package.json` file's scripts section, like `npm start` or `node main.js`, depending on your setup.
6. Remember that the GPT-4 model file path is specified to be `/home/random/private/models/groovy/`, please ensure to replace this with the actual file path where your model is located.
7. The endpoint `/generate-text` is a POST request that accepts JSON data. It requires a `prompt` and `options` to generate a text completion.
