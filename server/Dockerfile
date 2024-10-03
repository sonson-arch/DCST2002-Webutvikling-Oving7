#docker build -t todo-server -f server/Dockerfile .
#docker run -p 3000:3000 todo-server
# Use Debian latest stable from https://hub.docker.com as base image
FROM debian:latest

# Upgrade packages
RUN apt-get update && apt-get -y upgrade

# Install Node.js and npm
RUN apt-get -y install nodejs 

# Install npm
RUN apt-get -y install npm

# Create app directory
WORKDIR /usr/src/app

# Copy server package.json
COPY ./server/package.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY ./server ./

# Copy client files
COPY ./client /usr/src/client

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]