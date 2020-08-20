# docker image build -t getgit .
# docker container run -p 8080:80 getgit

FROM nginx:latest
LABEL maintainer 'GetGit by Marcelo Arnaldi'

COPY *.html /usr/share/nginx/html/
RUN mkdir -p /usr/share/nginx/html/css 
RUN mkdir -p /usr/share/nginx/html/js
COPY css/* /usr/share/nginx/html/css/
COPY js/* /usr/share/nginx/html/js/