FROM nginx:1.20.1

WORKDIR /home/blog-client

COPY dist .

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
