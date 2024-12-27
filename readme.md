# Restaurant-Backend API Collection

This document provides an overview of the API endpoints for managing restaurant bookings. The API includes endpoints for adding tables, booking tables, querying available tables, and freeing a table.

## Folder: Booking

### 1. **Add Table**
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/booking/add`
- **Request Body (JSON):**
  ```json
  {
    "SeatNum": 2,
    "tableNumber": 12,
    "status": "available"
  }
### 2. **Book Table**
- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/booking/bookTable`
- **Request Body (JSON):**
  ```json
  {
    "SeatNum": 4
  }
### 3. **Get Table Info**
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/booking/allTables`
- **Headers:**
  - `auth-token`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkYjFmNzU3N2IyMTM4YzU1MTVlNSIsImlhdCI6MTczNDU0ODY3NCwiZXhwIjoxNzM3MTQwNjc0fQ.-vgssVY6jdpvktR8-SylQXFPmF5TL7lRWdyD0vBBW_c`

### 4. **Free Table**
- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/booking/freeTable/67631d3a1cb463620a4c884c`
- **Headers:**
  - `auth-token`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkYjFmNzU3N2IyMTM4YzU1MTVlNSIsImlhdCI6MTczNDU0ODY3NCwiZXhwIjoxNzM3MTQwNjc0fQ.-vgssVY6jdpvktR8-SylQXFPmF5TL7lRWdyD0vBBW_c`

## Folder: Authentication

### 1. **Signup Route**
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users/signup`
- **Request Body (JSON):**
  ```json
  {
    "name": "santu",
    "email": "santup205@gmail.com",
    "password": "password"
  }

### 2. **Login Route**
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users/login`
- **Request Body (JSON):**
  ```json
  {
    "email": "santup205@gmail.com",
    "password": "password"
  }
### 3. **Profile Route**
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users/profile`
- **Headers:**
  - `auth-token`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkYjFmNzU3N2IyMTM4YzU1MTVlNSIsImlhdCI6MTczNDUzMjgyNSwiZXhwIjoxNzM3MTI0ODI1fQ.ndrYYeZ2NbbnzYcja0bWgt2cV19I-7cbzK7pUntmuqw`

### env
-**PORT:** `5000`
-**MONGO_URL** `mongodb+srv://santup205:pvCjKk7jZEyxnEGp@restraunt.eqk7p.mongodb.net/?retryWrites=true&w=majority&appName=Restraunt`
-**JWT_SECRET** `32381ef8bdd278888fa8ff56fb700d5214d392d2caa4488839c9fdd9ede21d37`