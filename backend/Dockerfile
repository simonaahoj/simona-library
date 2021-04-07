# We don't want to start from scratch.
# That is why we tell node here to use the openjdk image with java 12 as base.
FROM node:14

# The /app directory should act as the main application directory
WORKDIR src/app

ENV MONGODB_URI=$MONGODB_URI
ENV NODE_ENV=$NODE_ENV

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY . .

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 5000
RUN npm install
RUN npm run build



# Start the app
CMD [ "npm", "start" ]