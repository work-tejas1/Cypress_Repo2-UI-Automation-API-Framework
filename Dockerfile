#This is comment 
FROM cypress/base:14.16.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "Framework_1"]

