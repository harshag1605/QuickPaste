# QuickPaste Backend

QuickPaste is a small paste-sharing backend built with Spring Boot and MongoDB. Users can create text or code snippets and receive a unique `shareId` that can be used as a shareable link.

## Tech Stack

- Java 17
- Spring Boot
- Spring Web
- Spring Data MongoDB
- Lombok
- Maven

## Project Structure

```text
backend/
  pom.xml
  src/main/java/com/example/backend/
    BackendApplication.java
    controller/PasteController.java
    dto/ErrorResponse.java
    dto/PasteRequest.java
    exception/GlobalExceptionHandler.java
    exception/PasteNotFoundException.java
    model/Paste.java
    model/Visibility.java
    repository/PasteRepository.java
    service/PasteService.java
  src/main/resources/
    application.properties
    samples/api-requests.http
```

## MongoDB Configuration

`src/main/resources/application.properties`

```properties
spring.application.name=QuickPaste
spring.data.mongodb.uri=mongodb://localhost:27017/quicksharedb
server.port=8080
```

Make sure MongoDB is running locally on port `27017`.

## Run the Project

```bash
cd backend
./mvnw spring-boot:run
```

The API runs at:

```text
http://localhost:8080
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/pastes` | Create a new paste |
| GET | `/api/pastes/{shareId}` | Retrieve a paste by share ID |
| PUT | `/api/pastes/{id}` | Update a paste by MongoDB ID |
| DELETE | `/api/pastes/{id}` | Delete a paste by MongoDB ID |

## Sample Requests

### Create Paste

```bash
curl -X POST http://localhost:8080/api/pastes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Hello Java",
    "content": "System.out.println(\"Hello QuickPaste\");",
    "language": "java",
    "visibility": "PUBLIC"
  }'
```

Example response:

```json
{
  "id": "662b9d8d12ab345678901234",
  "shareId": "aB12xYz9",
  "title": "Hello Java",
  "content": "System.out.println(\"Hello QuickPaste\");",
  "language": "java",
  "createdAt": "2026-04-28T10:30:00",
  "expiresAt": null,
  "visibility": "PUBLIC"
}
```

### Get Paste

```bash
curl http://localhost:8080/api/pastes/aB12xYz9
```

### Update Paste

```bash
curl -X PUT http://localhost:8080/api/pastes/662b9d8d12ab345678901234 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Paste",
    "content": "Updated content",
    "language": "text",
    "visibility": "PRIVATE"
  }'
```

### Delete Paste

```bash
curl -X DELETE http://localhost:8080/api/pastes/662b9d8d12ab345678901234
```

More ready-to-run examples are available in `src/main/resources/samples/api-requests.http`.

## Notes

- `shareId` is generated automatically using random letters and numbers.
- `content` is required and limited to 10,000 characters.
- `expiresAt` is optional and must be a future date when provided.
- `visibility` can be `PUBLIC` or `PRIVATE`.
