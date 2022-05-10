FROM nginx:1.20.1

WORKDIR /home/blog-client

COPY dist .

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
