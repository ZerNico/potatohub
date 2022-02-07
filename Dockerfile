FROM node:16

# Create app directory
WORKDIR /app
ADD . /app/

RUN rm yarn.lock
RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]