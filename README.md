# sampleBlog

An example of express/nodejs project and Docker for local development.

Architecture:
- express/nodejs app
- postgreSQL database where posts are stored

Project features:
- Docker confihuration for local development.

To do:
- The create blog does not yet have login
- Front-end too simple

# Use this repository
1. Go to customPostgresImage and build the custom image using the following command 
```bash
sudo docker image build -t custom_psql .
```
2. Go to sampleBlog and compose system by using the following command
```bash
sudo docker-compose up
```
3. Allways do `sudo docker-compose down` to clean after yourself