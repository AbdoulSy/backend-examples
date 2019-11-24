FROM node:12-slim
WORKDIR /usr/node/backend
COPY ./context/package.json .
RUN npm i
COPY ./context . 
USER node
EXPOSE 3000
CMD npm start


