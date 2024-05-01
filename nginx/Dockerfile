# Use the official nginx base image
FROM nginx

# Remove the default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom nginx configuration file to the container
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]