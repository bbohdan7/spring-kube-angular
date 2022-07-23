#Stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/spring-kube-angular /usr/share/nginx/html
