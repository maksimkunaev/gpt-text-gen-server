# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source inside the Docker image 
# by copying everything from the current directory 
# into the /app directory in the image
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the application when the container launches
CMD [ "node", "main.js" ]
