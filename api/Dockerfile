
#######################################
#                                     #
#         ~ DOCKER FILE ~             #
#                                     #
#######################################

# Stage 1: Build
FROM node:16.19.0 AS builder

# The path in the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all dependencies
RUN npm install

# # If you are building your code for production
# RUN npm ci --only=production

# Copy other files as well
COPY . .

# Set timezone
RUN apt-get update && apt-get install -y tzdata
ENV TZ=Europe/Istanbul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Stage 2: Run
FROM node:16.19.0

# The path in the container.
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app

# Expose the port
EXPOSE 5000

CMD ["npm", "run", "start"]