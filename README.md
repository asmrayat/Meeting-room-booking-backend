# Meeting Backend 📅

[![Node.js CI](https://github.com/your-username/meeting-backend/actions/workflows/node.js.yml/badge.svg)](https://github.com/your-username/meeting-backend/actions/workflows/node.js.yml)

Backend service for managing meetings, rooms, and slots.

## ✨ Features

- **Node.js & Express:** Fast and scalable API development.
- **MongoDB:** Flexible NoSQL database for storing meetings, rooms, and slots.
- **JWT Authentication:** Secure endpoints with JSON Web Tokens.
- **RESTful API:** Well-defined endpoints for managing meetings, rooms, and slots.

## 🚀 Getting Started

1. **Clone the Repository:**

   git clone <repository-url>
   cd <repository-directory>

2. **Install Dependencies:**

   npm install

3. **Set Up Environment Variables:**

   Create a `.env` file in the root of your project with the following variables:

   DB_URL=<your-database-url>
   PORT=<your-port>
   BCRYPT_SALT_ROUNDS=<your-bcrypt-salt-rounds>
   JWT_ACCESS_SECRET=<your-jwt-access-secret>

4. **Run the Application:**

   npm start

## 📝 Endpoints

### User Authentication

- **POST /api/auth/signup**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/auth/signup](https://meeting-backend-one.vercel.app/api/auth/signup)
  - **Description:** Create a new user account.
  - **Request Body:**
    ```json
    {
      "name": "rayat",
      "email": "asm@gmail.com",
      "password": "rayat",
      "phone": "1234567890",
      "role": "admin",
      "address": "123 Main Street, City, Country"
    }
    ```

- **POST /api/auth/login**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/auth/login](https://meeting-backend-one.vercel.app/api/auth/login)
  - **Description:** Authenticate user credentials and receive a JWT token.
  - **Request Body:**
    ```json
    {
      "email": "asm@gmail.com",
      "password": "rayat"
    }
    ```

### Meetings

- **GET /api/meetings**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/meetings](https://meeting-backend-one.vercel.app/api/meetings)
  - **Description:** Retrieve all meetings.

- **POST /api/meetings**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/meetings](https://meeting-backend-one.vercel.app/api/meetings)
  - **Description:** Create a new meeting.
  - **Request Body:**
    ```json
    {
      "title": "Project Kickoff",
      "description": "Initial project meeting to discuss goals and deliverables",
      "date": "2024-07-01",
      "time": "10:00 AM",
      "attendees": ["rayat", "asm"]
    }
    ```

- **GET /api/meetings/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/meetings/:id](https://meeting-backend-one.vercel.app/api/meetings/:id)
  - **Description:** Retrieve a specific meeting by its ID.

- **PUT /api/meetings/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/meetings/:id](https://meeting-backend-one.vercel.app/api/meetings/:id)
  - **Description:** Update an existing meeting by its ID.
  - **Request Body:**
    ```json
    {
      "title": "Updated Meeting Title",
      "description": "Updated description",
      "date": "2024-07-02",
      "time": "11:00 AM",
      "attendees": ["rayat", "asm", "new attendee"]
    }
    ```

- **DELETE /api/meetings/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/meetings/:id](https://meeting-backend-one.vercel.app/api/meetings/:id)
  - **Description:** Delete a meeting by its ID.

### Rooms

- **GET /api/rooms**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/rooms](https://meeting-backend-one.vercel.app/api/rooms)
  - **Description:** Retrieve all rooms.

- **POST /api/rooms**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/rooms](https://meeting-backend-one.vercel.app/api/rooms)
  - **Description:** Create a new room.
  - **Request Body:**
    ```json
    {
      "name": "Conference Room A",
      "location": "First Floor",
      "capacity": 20
    }
    ```

- **GET /api/rooms/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/rooms/:id](https://meeting-backend-one.vercel.app/api/rooms/:id)
  - **Description:** Retrieve a specific room by its ID.

- **PUT /api/rooms/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/rooms/:id](https://meeting-backend-one.vercel.app/api/rooms/:id)
  - **Description:** Update an existing room by its ID.
  - **Request Body:**
    ```json
    {
      "name": "Updated Room Name",
      "location": "Updated Location",
      "capacity": 30
    }
    ```

- **DELETE /api/rooms/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/rooms/:id](https://meeting-backend-one.vercel.app/api/rooms/:id)
  - **Description:** Delete a room by its ID.

### Slots

- **GET /api/slots**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/slots](https://meeting-backend-one.vercel.app/api/slots)
  - **Description:** Retrieve all slots.

- **POST /api/slots**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/slots](https://meeting-backend-one.vercel.app/api/slots)
  - **Description:** Create a new slot.
  - **Request Body:**
    ```json
    {
      "roomId": "room-id",
      "startTime": "2024-07-01T10:00:00Z",
      "endTime": "2024-07-01T11:00:00Z"
    }
    ```

- **GET /api/slots/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/slots/:id](https://meeting-backend-one.vercel.app/api/slots/:id)
  - **Description:** Retrieve a specific slot by its ID.

- **PUT /api/slots/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/slots/:id](https://meeting-backend-one.vercel.app/api/slots/:id)
  - **Description:** Update an existing slot by its ID.
  - **Request Body:**
    ```json
    {
      "roomId": "updated-room-id",
      "startTime": "2024-07-01T11:00:00Z",
      "endTime": "2024-07-01T12:00:00Z"
    }
    ```

- **DELETE /api/slots/:id**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/slots/:id](https://meeting-backend-one.vercel.app/api/slots/:id)
  - **Description:** Delete a slot by its ID.

- **GET /api/slots/availability**
  - **Endpoint:** [https://meeting-backend-one.vercel.app/api/slots/availability](https://meeting-backend-one.vercel.app/api/slots/availability)
  - **Description:** Check slot availability for a specific date and room.
  - **Query Parameters:**
    - `date`: The date to check availability (e.g., 2024-06-15)
    - `roomId`: The ID of the room (e.g., 6675e071bf073d54c775a3c0)
