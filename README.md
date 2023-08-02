# GPT-4all Node Server

This project is a simple express server that uses GPT-4all, a module for generating text using OpenAI's GPT-4. The project is containerized with Docker.

## Requirements

- Docker
- Node.js (Version 14.0 or later)
- npm (Node Package Manager)

## Steps to run the project

1. **Clone the repository**

```bash
git clone https://github.com/user/repo.git
cd repo
```

2. **Build Docker Image**

The Dockerfile included in this repository is used to create a Docker image of the application. Run the following command to build the image.

```bash
docker build -t gpt4all-node-server .
```

3. **Run Docker Container**

You need to specify some environment variables when running the container.

- `MODEL_NAME` is the name of the GPT-4 model you want to use.
- `MODEL_PATH` is the path to the directory where the model is stored.

You also need to map a port in the container to a port on your host machine. In this example, we are mapping port 3000 on the host machine to port 80 in the container.

Here's the command to run the container:

```bash
docker run -p 3000:80 -v /home/random/private/models/groovy:/model/groovy --env MODEL_NAME=ggml-gpt4all-j-v1.3-groovy --env MODEL_PATH=/model/groovy --network=host gpt4all-node-server
```

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
