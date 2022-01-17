FROM nginx

COPY node-01 /usr/share/nginx/html/node-01
COPY node-02 /usr/share/nginx/html/node-02
COPY node-03 /usr/share/nginx/html/node-03

COPY images /usr/share/nginx/images

COPY docker/simple-lb/nginx.conf /etc/nginx/nginx.conf