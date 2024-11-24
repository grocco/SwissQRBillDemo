# Swiss QR Bill Demo App

## Swiss invoice related instructions

```shell
cd service
quarkus build --native -Dquarkus.native.container-build=true -Dquarkus.native.container-runtime=podman
docker buildx build --file=src/main/docker/Dockerfile.native-micro \
  --tag=roccoghielmini/swissqrinvoicebackend:latest \
  --output=type=docker .
# here, remember to open docker desktop and that it is on the latest version
docker login
docker push roccoghielmini/swissqrinvoicebackend:latest
```

----

This application serves as a demonstration of the Swiss QR Bill Generator library:

- [Java library](https://github.com/manuelbl/SwissQRBill)
- [.NET library](https://github.com/manuelbl/SwissQRBill.NET)
- [Wiki](https://github.com/manuelbl/SwissQRBill/wiki)


## Demo App

[Try the app](https://www.codecrete.net/qrbill)


## Components

The app consists of two components:

- [JSON REST service](service) (Java MicroProfile, Quarkus, RESTEasy)
- [React UI](ui) (React, MUI Material UI)
