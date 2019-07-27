FROM node:10

# working directory
RUN mkdir /app
WORKDIR /app

# update the operting system
RUN apt-get update
RUN npm install pm2 -g

#copy all the files
COPY . .

# install node dependency and build project
RUN npm install
RUN npm run build

# container port
EXPOSE 8080

# run on cointainer start command
CMD ["pm2-runtime", "build/src/server.js"]

