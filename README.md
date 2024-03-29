# third-party-API

  API to initialize the database. fetch the JSON from the third party API and initialize the database with seed data.

## 🔗 Hosted link

Postman API Testing Documentation: [API Documentation](https://documenter.getpostman.com/view/24632237/2sA2rB1NUZ)


## Technologies Used

- Node.js
- Express.js
- Postgres SQL
 
## Configuration File
1. Create a PostgreSQL database and update the connection details in `.env`.

```ENV

PORT=3000

DATABASE_URL=YOUR_URL
 
```
## Installation

1. Install dependencies:

```bash
npm install
```

2. Run the server:

```bash
npm start
```

## Endpoints

- `GET http://localhost:3000/api/initialize-database`: API to Initialize the Database 
- `GET http://localhost:3000/api/transactions` : API to List All Transactions
- `GET http://localhost:3000/api/statistics` : API for Statistics
- `GET http://localhost:3000/api/bar-chart` : API for Bar Chart
- `GET http://localhost:3000/api/bar-chart` : API for Bar Chart
- `GET http://localhost:3000/api/pie-chart` : API for Pie Chart
- `GET http://localhost:3000/api/combined` : Combined API for All Data

 
