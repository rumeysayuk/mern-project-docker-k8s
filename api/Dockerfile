# Use an official Node runtime as a parent image
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the backend port
EXPOSE 8000

# Start the server
CMD ["node", "index.js"]
