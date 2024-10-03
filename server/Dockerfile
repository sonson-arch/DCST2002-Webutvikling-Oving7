# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# List the contents of the working directory (for debugging)
RUN ls -la

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the server runs on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]