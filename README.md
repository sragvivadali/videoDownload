# Youtube Video Download Application

## Dependencies

- [Install Docker](https://docs.docker.com/get-started/#download-and-install-docker)

## Development

This project uses docker compose to create multiple docker containers in one command. One container runs the this application while the other runs a Redis database.

To build and run the application:

```
docker-compose up --build
```

**Note:** If you want to run the containers without keeping your terminal window open, pass the `-d` flag to run them in detached mode. 

Now the app should be running! Go to `http://localhost` and you should be able to see it.

To destroy the application:

```
docker-compose down
```

#### Fair Warning

The Redis instance runs inside a docker container, but to persist across rebuilds, it gets mapped to the `.data` folder. The folder is gitignored, but to reset your data, you must delete this folder in this project.

