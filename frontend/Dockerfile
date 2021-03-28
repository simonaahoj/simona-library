
FROM node:14

# Create an application directory
RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY . .

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 3000

# Start the app
CMD [ "yarn", "start" ]