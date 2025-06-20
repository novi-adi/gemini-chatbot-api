# Gemini Chatbot API

Gemini Chatbot API is a simple Node.js and Express server that interacts with Google Generative AI (Gemini 2.0 Flash).

## Features

- API endpoint to receive user messages and reply using Gemini AI.
- Middleware for CORS and JSON parsing.
- Supports serving static files from the `public` folder.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/novi-adi/gemini-chatbot-api.git
   cd gemini-chatbot-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**
   Create a `.env` file in the root directory and add:

   ```
   GEMINI_API_KEY=YOUR_GEMINI_API_KEY
   ```

4. **Run the server**

   ```bash
   node index.js
   ```

   The server will run at `http://localhost:3000` (or the port you specify).

## Endpoint

### `POST /api/chat`

Receives a message and replies using Gemini AI.

#### Request Body

```json
{
  "message": "Hello Gemini, how are you?"
}
```

#### Response

```json
{
  "reply": "Hello! I'm good, thank you for asking. How can I assist you today?"
}
```

#### Error Response

- `400 Bad Request` if `message` is missing.
- `500 Internal Server Error` if something goes wrong with the server or Gemini API.

## Project Structure

```
gemini-chatbot-api/
├── index.js
├── package.json
├── .env
└── public/
```

## Notes

- Make sure you have a valid API key from Google Generative AI (Gemini).
- For production, consider adding more detailed error handling and API key protection.

## Screenshot Project

![App Screenshot](https://raw.githubusercontent.com/novi-adi/gemini-chatbot-api/refs/heads/main/public/images/screenshot_app.gif 'Screenshot of the app')

## License

This project is free to use for learning and personal development purposes.
