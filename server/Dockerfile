#docker build -t todo-server -f server/Dockerfile .
#docker run -p 3000:3000 todo-server
# Use Node.js version 14
FROM node:14

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