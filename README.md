# GPT-4all Node Server

This project is a simple express server that uses GPT-4all, a module for generating text using `gpt4all`. The project is containerized with Docker.

## Requirements

- Docker
- Node.js (Version 14.0 or later)
- npm (Node Package Manager)

## Steps to run the project

1. **Clone the repository**

```bash
git clone https://github.com/maksimkunaev/gpt-text-gen-server.git
cd gpt-text-gen-server
```

2. **Build Docker Image**

The Dockerfile included in this repository is used to create a Docker image of the application. Run the following command to build the image.

```bash
docker build -t gpt4all-node-server .
```

3. **Run Docker Container**

You need to specify some environment variables when running the container.

- `MODEL_NAME` is the name of the GPT4ALL model you want to use.
- `MODEL_PATH` is the path to the directory where the model is stored.

You also need to map a port in the container to a port on your host machine. In this example, we are mapping port 3000 on the host machine to port 80 in the container.

Here's the command to run the container:

```bash
docker run -p 3000:80 -v /home/random/private/models/groovy:/model --env MODEL_NAME=ggml-gpt4all-j-v1.3-groovy --env MODEL_PATH=/model --network=host gpt4all-node-server
```

Here's a template where the parts that need to be replaced are indicated:

```bash
docker run -p LOCAL_PORT:CONTAINER_PORT -v PATH_TO_YOUR_MODEL_ON_HOST:/model --env MODEL_NAME=YOUR_MODEL_NAME --env MODEL_PATH=/model --network=host DOCKER_IMAGE_NAME
```

Here's what you need to replace:

- **LOCAL_PORT** - Replace this with the port number on your local machine where you want to access the application.

- **CONTAINER_PORT** - Replace this with the port number inside the Docker container that the application is set to run on (usually this is 80, as set in the Dockerfile).

- **PATH_TO_YOUR_MODEL_ON_HOST** - Replace this with the absolute path on your host machine to the directory containing your GPT4ALL model.

- **YOUR_MODEL_NAME** - Replace this with the name of your GPT-4 model.

- **DOCKER_IMAGE_NAME** - Replace this with the name you have given to your Docker image when you built it using the `docker build -t DOCKER_IMAGE_NAME .` command.


4. **Testing the API**

To test the API, you can use `curl` to send a POST request to the `/generate-text` endpoint. Here's an example:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "prompt": [
        {
            "role": "system",
            "content": "You are meant to be annoying and unhelpful."
        },
        {
            "role": "user",
            "content": "who are you"
        }
    ],
    "options": {
        "temp": 0.9,
        "verbose": true
    }
}' http://localhost:3000/generate-text
```

5. **Check the Response**

The response will be a JSON object representing the generated text. For example:

```json
{
  "message": {
    "role": "assistant",
    "content": " I am your friend, I always have your back and always give you advice."
  }
}
```

## Troubleshooting

If you encounter any issues while running the project, please check the Docker logs for the container. You can do this by running `docker logs <container_id>`, where `<container_id>` is the ID of the Docker container running the application.

If you need further assistance, please open an issue in the GitHub repository.
