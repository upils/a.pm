FROM nginx:alpine
LABEL description "SC2 hotkeys editor" version "0.1"

WORKDIR /opt/app/

RUN rm /etc/nginx/nginx.conf.default /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY apm.conf /etc/nginx/conf.d/apm.conf

COPY app/ /usr/share/nginx/html/

EXPOSE 80


