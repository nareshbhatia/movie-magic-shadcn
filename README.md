# Movie Magic Shadcn

A sample application to demonstrate the use of
[shadcn/ui](https://ui.shadcn.com/), [Radix](https://www.radix-ui.com/), and
[Tailwind CSS](https://tailwindcss.com/) to build Next.js applications.

Live demo: https://movie-magic-shadcn.vercel.app/

![Movie Magic Screenshot](assets/movie-magic-screenshot.png)

## Building Movie Magic Shadcn

### Development Build

```shell
npm ci
npm run dev
```

Open a browser window at http://localhost:3000/ to see app.

### Production Build

```shell
npm ci
npm run build
npm start
```

Open a browser window at http://localhost:3000/ to see app.

### Production Build with Docker and Kubernetes

```shell
# Build a docker image
# -t: tags the image
# Dot at the end: the build's context is the current directory
docker build -t nareshbhatia/movie-magic-shadcn:1.0.0 .

# Run the docker image locally to make sure that it is working correctly
# -d: run in detached mode
# --name movie-magic-shadcn: assign a name to the container
# -p 3000:3000: map machine port 3000 to container port 3000
# movie-magic-shadcn:1.0.0: tag of the image
docker run -d --name movie-magic-shadcn -p 3000:3000 nareshbhatia/movie-magic-shadcn:1.0.0

# Push the docker image to Docker Hub
docker login -u nareshbhatia
docker push nareshbhatia/movie-magic-shadcn:1.0.0

# Run in Kubernetes cluster
minikube start --driver docker
kubectl apply -f deploy/movie-magic-deployment.yaml
minikube service movie-magic-service
```

Open a browser window at http://localhost:3000/ to see app.
