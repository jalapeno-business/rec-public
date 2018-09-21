# using latest version of node (long term support), from Dockerhub
FROM node:8

# directory to hold application code 
WORKDIR /server

# install app dependencies 
COPY package*.json ./

RUN npm install

# bundle app source
COPY . . 

EXPOSE 8080

CMD ["npm", "start"]