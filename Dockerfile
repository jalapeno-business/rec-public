# using latest version of node (long term support), from Dockerhub
FROM node:8

# directory to hold application code 
WORKDIR /server

# install app dependencies 
COPY package*.json ./

RUN npm install

# bundle app source
COPY . . 

# was 8080, switched to personal port and now works. error was that get requests not working
EXPOSE 3004

CMD ["npm", "start"]