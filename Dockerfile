FROM node:alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
# CMD NODE_ENV=production node server/index.js

FROM node:alpine
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/build ./build
COPY --from=build-deps /usr/src/app/babel-src ./babel-src
COPY --from=build-deps /usr/src/app/server ./server
COPY --from=build-deps /usr/src/app/node_modules ./node_modules
CMD NODE_ENV=production node server/index.js