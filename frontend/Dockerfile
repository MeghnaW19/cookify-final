# FROM node:current-alpine

# WORKDIR /app

# COPY ./dist ./dist

# RUN npm install http-server -g

# WORKDIR /app/dist/demo

# CMD ["http-server", "-c1", "-p", "4200"]

FROM nginx:stable-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY dist/music-frontend/ /usr/share/nginx/html