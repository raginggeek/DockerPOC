FROM nginx:1.13.9-alpine
COPY frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]