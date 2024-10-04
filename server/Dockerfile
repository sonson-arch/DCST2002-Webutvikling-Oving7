#docker build -t todo-server -f server/Dockerfile .
#docker run -p 3000:3000 todo-server
# Use Docker's official DinD image
FROM docker:19.03.12-dind

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

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