
# CSCI355 Internet & Web Technologies | Project 2

This project utilizes the Google Books API and provides books for users. This project features a modern design and easy navigation for users to interact with. We also integrated a database which allows for user authentication.

## Authors

- [@Aviv Cohen](https://github.com/acohen31)
- [@Arnan Khan](https://github.com/ArnanK)
- [@Ishrat Amin](https://github.com/Ishrat24)
- [@Mohammed Zian Hassan](https://github.com/sugarcane1001)
- [@Eric Yang](https://github.com/BenevolentBurger)


## Requirements
```
Node.js
```
## Dependencies



```bash
    "axios": "^1.6.8",
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.4",
    "cookie-session": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "ejs": "^2.6.2",
    "express": "^4.19.2",
    "express-validator": "^6.10.0",
    "http-errors": "^1.7.3",
    "mongoose": "^5.11.15",
    "multer": "^1.4.5-lts.1",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "pino": "^6.11.2",
    "pino-pretty": "^4.7.1"
```


### To install dependencies, run the following commands:
```bash
npm install
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

## API Reference

#### Powered By the Google Books API

```http
  https://developers.google.com/books
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API_KEY` | `string` | **Required**. Your API key |


## Required Software
- Docker
- MongoDB
- MongoDB Compass


### Requires MongoDB through Docker
(default port 27017 is mapped to port 37017)
```bash
  docker pull mongo
  docker run --name mongodb -p 37017:27017 -d mongo
```

#### Verify container is installed by:
```
  docker ps
```

#### Run container by:
```
  docker start mongo
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/ArnanK/HW_Project2_CSCI355.git
```

Go to the project directory

```bash
  cd HW_Project2_CSCI355
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Presentation
[![Alt text]()


## Demo

![Alt Text]()

