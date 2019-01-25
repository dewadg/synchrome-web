FROM node:latest AS build

WORKDIR /build

ADD . .

RUN yarn
RUN yarn build

FROM nginx

ADD ./deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/dist /var/www/html
