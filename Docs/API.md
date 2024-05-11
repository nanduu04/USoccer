----- List API's Here ----------Sure! Here is a detailed documentation of the endpoints, formatted for inclusion in a README file.

```markdown
# Sportify Backend API Documentation

This documentation provides an overview of the endpoints for the Sportify backend API, which allows users to search for and join sports activities near their location. The backend is built using Django and Django REST Framework.

## Endpoints

### User Authentication

#### Register a New User

- **Endpoint**: `/register/`
- **Method**: `POST`
- **Description**: Allows a new user to register.
- **Request Body**:
  ```json
  {
      "username": "string",
      "email": "string",
      "password": "string"
  }
  ```
- **Response**:
  ```json
  {
      "id": "integer",
      "username": "string",
      "email": "string"
  }
  ```

#### Login a User

- **Endpoint**: `/login/`
- **Method**: `POST`
- **Description**: Allows a user to log in and receive an authentication token.
- **Request Body**:
  ```json
  {
      "username": "string",
      "password": "string"
  }
  ```
- **Response**:
  ```json
  {
      "message": "Login successful"
  }
  ```

#### Logout a User

- **Endpoint**: `/logout/`
- **Method**: `POST`
- **Description**: Logs out the user and invalidates the authentication token.
- **Request Body**: None
- **Response**:
  ```json
  {
      "message": "Logout successful"
  }
  ```

### Activity Management

#### Create an Activity

- **Endpoint**: `/activities/`
- **Method**: `POST`
- **Description**: Creates a new activity.
- **Request Body**:
  ```json
  {
      "name": "string",
      "description": "string",
      "sport": "string",  // "soccer" or "basketball"
      "location": "PointField", // GeoDjango PointField representation
      "max_players": "integer"
  }
  ```
- **Response**:
  ```json
  {
      "id": "integer",
      "name": "string",
      "description": "string",
      "sport": "string",
      "location": "PointField",
      "max_players": "integer",
      "created_at": "datetime"
  }
  ```

#### List All Activities

- **Endpoint**: `/activities/`
- **Method**: `GET`
- **Description**: Retrieves a list of all activities.
- **Response**:
  ```json
  [
      {
          "id": "integer",
          "name": "string",
          "description": "string",
          "sport": "string",
          "location": "PointField",
          "max_players": "integer",
          "created_at": "datetime"
      },
      ...
  ]
  ```

#### Retrieve a Single Activity

- **Endpoint**: `/activities/{id}/`
- **Method**: `GET`
- **Description**: Retrieves details of a specific activity by ID.
- **Response**:
  ```json
  {
      "id": "integer",
      "name": "string",
      "description": "string",
      "sport": "string",
      "location": "PointField",
      "max_players": "integer",
      "created_at": "datetime"
  }
  ```

#### Update an Activity

- **Endpoint**: `/activities/{id}/`
- **Method**: `PUT` or `PATCH`
- **Description**: Updates the details of an existing activity.
- **Request Body** (example for `PUT`):
  ```json
  {
      "name": "string",
      "description": "string",
      "sport": "string",
      "location": "PointField",
      "max_players": "integer"
  }
  ```
- **Response**:
  ```json
  {
      "id": "integer",
      "name": "string",
      "description": "string",
      "sport": "string",
      "location": "PointField",
      "max_players": "integer",
      "created_at": "datetime"
  }
  ```

#### Delete an Activity

- **Endpoint**: `/activities/{id}/`
- **Method**: `DELETE`
- **Description**: Deletes an existing activity.
- **Response**:
  ```json
  {
      "message": "Activity deleted"
  }
  ```

#### Join an Activity

- **Endpoint**: `/activities/{id}/join/`
- **Method**: `POST`
- **Description**: Allows a user to join an activity.
- **Response**:
  ```json
  {
      "message": "Joined activity"
  }
  ```

#### Leave an Activity

- **Endpoint**: `/activities/{id}/leave/`
- **Method**: `POST`
- **Description**: Allows a user to leave an activity.
- **Response**:
  ```json
  {
      "message": "Left activity"
  }
  ```

### Location-Based Search

#### Search Activities Near a Location

- **Endpoint**: `/activities/search/`
- **Method**: `GET`
- **Description**: Searches for activities near a specified location.
- **Request Parameters**:
  - `latitude`: `float`
  - `longitude`: `float`
  - `radius`: `integer` (optional, default: 10km)
- **Response**:
  ```json
  [
      {
          "id": "integer",
          "name": "string",
          "description": "string",
          "sport": "string",
          "location": "PointField",
          "max_players": "integer",
          "created_at": "datetime"
      },
      ...
  ]
  ```

### Notifications

#### Send a Notification

- **Endpoint**: `/notifications/send/`
- **Method**: `POST`
- **Description**: Sends a notification to users.
- **Request Body**:
  ```json
  {
      "title": "string",
      "message": "string",
      "registration_ids": ["string"]
  }
  ```
- **Response**:
  ```json
  {
      "message": "Notification sent"
  }
  ```

## How to Use

1. **Register a New User**:
   ```sh
   curl -X POST http://yourdomain.com/api/register/ -d '{"username": "user1", "email": "user1@example.com", "password": "password123"}' -H "Content-Type: application/json"
   ```

2. **Login a User**:
   ```sh
   curl -X POST http://yourdomain.com/api/login/ -d '{"username": "user1", "password": "password123"}' -H "Content-Type: application/json"
   ```

3. **Create an Activity**:
   ```sh
   curl -X POST http://yourdomain.com/api/activities/ -d '{"name": "Soccer Game", "description": "Friendly soccer match", "sport": "soccer", "location": {"type": "Point", "coordinates": [longitude, latitude]}, "max_players": 10}' -H "Content-Type: application/json"
   ```

4. **Search Activities Near a Location**:
   ```sh
   curl -X GET http://yourdomain.com/api/activities/search/?latitude=40.7128&longitude=-74.0060&radius=10
   ```

