1. Process Build 
```docker build -t webservice .```

2. Create Docker Swarm on device
```docker swarm init```

3. build all network, services and all container on stack , prod will be name of service prefix
```docker stack deploy --compose-file=docker-compose.yml prod```

4. if have update on script without have new version of image just execute step 3

5. if have update on sscript and want to have new version of image webservice
```docker build -t webservice:v2 .```

6. after update image you must update the image to current service prod, process will be update per 5 containers at a time, because 'parrarelism: 5' on docker-compose.yml

```docker service update --image webservice:v2 prod_app```

7. to stop all program , just stop the service with command, and all container will be stopped and removed
```docker service rm <id-service>```

8. to scale the service, just execute this command, this command will scale container service prod_app to 10
```docker service scale prod_app=10```

So, we don’t need to create hundreds of containers manually. We don’t need to place every container of our app in a different port. We don’t need to manually write our containers ip and port in ngninx/haproxy conf file. And we can do it with multiple servers (with docker swarm), with multiple services (with docker compose), update our application without downtime, and scale it up (or down) without downtime.