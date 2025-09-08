# Node.js Backend Architecture Typescript Project


# Project Highlights 
1. Node.js
2. Express.js
3. Typescript
4. Mongoose
5. Redis
6. Mongodb
7. Joi
8. Unit Tests & Integration Tests
9. Docker
10. JWT

# About The Project
This project is designed for a production ready environment. It can handle the scale and complexity of a very demanding application.

It is suitable for Web Apps, Mobile Apps, and other API services.

# About Seed changes
Go on "addons > init-mongo.js > seed" and change seed credentials for test.


# Project Instructions
We will learn and build the backend application for a blogging platform. The main focus will be to create a maintainable and highly testable architecture.
<br>
Following are the features of this project:
* **This backend is written in Typescript**: The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. I have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.
* **Separation of concern principle**: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.
* **Feature encapsulation**: The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.
* **Centralised Error handling**: I have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.
* **Centralised Response handling**: Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.
* **Mongodb is used through Mongoose**: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.
* **Redis Memcache**: I have used the redis server for caching the items which does not change frequently. It will boost the performance of our system.
* **Async execution**: I have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.
* **Docker compose has been configured**: I have created the Dockerfile to provide the easy deployability without any setup and configurations. 
* **Unit test is favored**: The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.
* **A pure backend project**: I have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.


### Run Docker Compose
- Install Docker and Docker Compose. [Find Instructions Here](https://docs.docker.com/install/).

```bash
# install and start docker containers
docker-compose up --build
```

-  You will be able to access the api from http://localhost:3000

### Run Tests
```bash
docker exec -t blogs-tester npm run test
```

### Seed Command
npm run seed

If having any issue
- Make sure 3000 port is not occupied else change PORT in **.env** file.
- Make sure 27017 port is not occupied else change DB_PORT in **.env** file.
- Make sure 6379 port is not occupied else change REDIS_PORT in **.env** file.

## Run on the local machine
Change the following hosts in the **.env** and **.env.test**
- DB_HOST=localhost
- REDIS_HOST=localhost

Best way to run this project is to use the vscode `Run and Debug` button. Scripts are available for debugging and template generation on vscode.

- Install node.js and npm on your local machine.

```bash
# From the root of the project executes
$ npm install
```

### Stop the app and tester docker container
```bash
$ docker compose stop tester
$ docker compose stop app 
```

### Run the app

```bash
# production mode
$ npm start
or
# watch mode
$ npm run watch
```

### Test

```bash
# unit and integration tests
$ npm test
```
  
## Project Directory Structure
 ```
├── .vscode
│   ├── settings.json
│   ├── tasks.json
│   └── launch.json
├── .templates
├── src
│   ├── server.ts
│   ├── app.ts
│   ├── config.ts
│   ├── auth
│   │   ├── apikey.ts
│   │   ├── authUtils.ts
│   │   ├── authentication.ts
│   │   ├── authorization.ts
│   │   └── schema.ts
│   ├── core
│   │   ├── ApiError.ts
│   │   ├── ApiResponse.ts
│   │   ├── JWT.ts
│   │   ├── Logger.ts
│   │   └── utils.ts
│   ├── cache
│   │   ├── index.ts
│   │   ├── keys.ts
│   │   ├── query.ts
│   │   └── repository
│   │       ├── BlogCache.ts
│   │       └── BlogsCache.ts
│   ├── database
│   │   ├── index.ts
│   │   ├── model
│   │   │   ├── ApiKey.ts
│   │   │   ├── Blog.ts
│   │   │   ├── Keystore.ts
│   │   │   ├── Role.ts
│   │   │   └── User.ts
│   │   └── repository
│   │       ├── ApiKeyRepo.ts
│   │       ├── BlogRepo.ts
│   │       ├── KeystoreRepo.ts
│   │       ├── RoleRepo.ts
│   │       └── UserRepo.ts
│   ├── helpers
│   │   ├── asyncHandler.ts
│   │   ├── permission.ts
│   │   ├── role.ts
│   │   ├── security.ts
│   │   ├── utils.ts
│   │   └── validator.ts
│   ├── routes
│   │   ├── access
│   │   │   ├── credential.ts
│   │   │   ├── login.ts
│   │   │   ├── logout.ts
│   │   │   ├── schema.ts
│   │   │   ├── signup.ts
│   │   │   ├── token.ts
│   │   │   └── utils.ts
│   │   ├── blog
│   │   │   ├── editor.ts
│   │   │   ├── index.ts
│   │   │   ├── schema.ts
│   │   │   └── writer.ts
│   │   ├── blogs
│   │   │   ├── index.ts
│   │   │   └── schema.ts
│   │   ├── index.ts
│   │   └── profile
│   │       ├── schema.ts
│   │       └── user.ts
│   └── types
│       └── app-request.d.ts
├── tests
│   ├── auth
│   │   ├── apikey
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authUtils
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authentication
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   └── authorization
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── core
│   │   └── jwt
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── cache
│   │   └── mock.ts
│   ├── database
│   │   └── mock.ts
│   ├── routes
│   │   ├── access
│   │   │   ├── login
│   │   │   │   ├── integration.test.ts
│   │   │   │   ├── mock.ts
│   │   │   │   └── unit.test.ts
│   │   │   └── signup
│   │   │       ├── mock.ts
│   │   │       └── unit.test.ts
│   │   └── blog
│   │       ├── index
│   │       │   ├── mock.ts
│   │       │   └── unit.test.ts
│   │       └── writer
│   │           ├── mock.ts
│   │           └── unit.test.ts
│   └── setup.ts
├── addons
│   └── init-mongo.js
├── keys
│   ├── private.pem
│   └── public.pem
├── .env
├── .env.test
├── .gitignore
├── .dockerignore
├── .eslintrc
├── .eslintignore
├── .prettierrc
├── .prettierignore
├── .travis.yml
├── Dockerfile
├── docker-compose.yml
├── package-lock.json
├── package.json
├── jest.config.js
└── tsconfig.json
 ```
 
 
## API Examples
* Signup
    * Method and Headers
    ```
    POST /signup/basic HTTP/1.1
    Host: localhost:3000
    x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
    Content-Type: application/json
    ```
    * Request Body
    ```json
    {
        "name" : "Jay Soni",
        "email": "jay@github.com",
        "password": "changeit",
        "profilePicUrl": "data:image/png;base64,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"
    }
    ```
    * Response Body: 200
    ```json
    {
      "statusCode": "10000",
      "message": "Signup Successful",
      "data": {
        "user": {
          "_id": "63a19e5ba2730d1599d46c0b",
          "name": "Jay Soni",
          "roles": [
             {
               "_id": "63a197b39e07f859826e6626",
               "code": "LEARNER",
               "status": true
             }
            ],
          "profilePicUrl": "data:image/png;base64,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"
        },
        "tokens": {
          "accessToken": "some_token",
          "refreshToken": "some_token"
        }
      }
    }
    ```
    * Response Body: 400
    ```json
    {
      "statusCode": "10001",
      "message": "Bad Parameters"
    }
    ```
* Profile Private
    * Method and Headers
    ```
    GET /profile/my HTTP/1.1
    Host: localhost:3000
    x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
    Content-Type: application/json
    Authorization: Bearer <your_token_received_from_signup_or_login>
    ```
    * Response Body: 200
    ```json
    {
      "statusCode": "10000",
      "message": "success",
      "data": {
        "name": "Jay Soni Anwar",
        "profilePicUrl": "data:image/png;base64,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",
        "roles": [
          {
            "_id": "5e7b8acad7aded2407e078d7",
            "code": "LEARNER"
          },
          {
            "_id": "5e7b8c22d347fc2407c564a6",
            "code": "WRITER"
          },
          {
            "_id": "5e7b8c2ad347fc2407c564a7",
            "code": "EDITOR"
          }
        ]
      }
    }
    ```
     
 
