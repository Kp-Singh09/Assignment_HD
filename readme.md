# HD Notes - Full-Stack Note-Taking Application

HD Notes is a modern, secure, and responsive full-stack note-taking application built with React, Node.js, and MongoDB, all powered by TypeScript. It features a robust authentication system and a clean, user-friendly interface for managing notes.


## 🚀 Features

* **Secure User Authentication**: Sign up and log in via Email/OTP or with a Google account.
* **JWT-Based Authorization**: User sessions are secured using JSON Web Tokens to protect note-related actions.
* **Full CRUD for Notes**: Users can create, read, update, and delete their own notes.
* **Robust Form Validation**: All inputs are validated on the server-side to ensure data integrity.
* **Responsive Design**: A mobile-first and fully responsive interface built with Tailwind CSS.

---

## 🛠️ Tech Stack

### Frontend

* **ReactJS (v19)** with TypeScript
* **Vite** as a build tool
* **React Router** for routing
* **Material-UI** for UI components
* **Tailwind CSS** for styling
* **Axios** for API requests
* **Google OAuth Library** for Google login

### Backend

* **Node.js** with TypeScript
* **Express.js** as the web framework
* **MongoDB** with **Mongoose** for the database
* **JSON Web Token (JWT)** for authorization
* **Nodemailer** for sending OTP emails
* **Express Validator** for input validation

---

## ⚙️ Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

* Node.js (v18 or later)
* npm (v9 or later)
* Git

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Highway-Delite
```

### 2. Backend Setup

First, navigate to the server directory.
```bash
cd server
```

Install the dependencies.
```bash
npm install
```

Create a `.env` file in the `server` directory and add the following environment variables.
```env
# MongoDB Connection String (from MongoDB Atlas)
MONGODB_URI=mongodb+srv://<username>:<password>@<your-cluster-url>/<database-name>?retryWrites=true&w=majority

# JSON Web Token Secret (a long, random string)
JWT_SECRET=YOUR_SUPER_SECRET_KEY_HERE

# Google OAuth Client ID (from Google Cloud Console)
CLIENT_ID=YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com

# SMTP Email Settings (e.g., for a Gmail App Password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
```

Start the backend development server.
```bash
npm run dev
```
The server will be running on `http://localhost:8001`.

### 3. Frontend Setup

Open a new terminal and navigate to the client directory.
```bash
cd client
```

Install the dependencies.
```bash
npm install
```

Create a `.env` file in the `client` directory and add the following variables.
```env
# The base URL for your backend API
VITE_API_BASE_URL=http://localhost:8001/api

# Google Client ID (must be the same as the one in the server .env)
VITE_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com
```

Start the frontend development server.
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---
