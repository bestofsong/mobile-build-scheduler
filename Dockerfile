FROM node:8

# Set the working directory to /app
WORKDIR /mobile-build-scheduler

COPY . /mobile-build-scheduler
RUN cd /mobile-build-scheduler && npm install

# Make port 80 available to the world outside this container
EXPOSE 80
VOLUME /repos
# Define environment variable
ENV PORT 80
ENV DATA_VOLUME /repos

CMD ["node", "bin/www"]
