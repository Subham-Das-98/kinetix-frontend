# Kinetix — Video Streaming Platform

Kinetix is a full-featured **video streaming platform** where users can create accounts, create their own channels, upload videos, and discover and consume content from other creators.

Users can interact with content by **subscribing to channels, commenting on videos, and liking or disliking videos**, providing the core experience of a community-driven video platform.

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/devsubhamdas/kinetix-frontend
cd kinetix-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and configure the required environment variables.

Start the development server:

```bash
npm run dev
```

For a production build:

```bash
npm run build
```

## ⚙️ Environment Variables

```env
# Server hostname for local development
VITE_NODE_SERVER_LOCAL_HOSTNAME=http://localhost

# Server hostname for LAN/production
VITE_NODE_SERVER_HOSTNAME=

# Backend server port
VITE_NODE_SERVER_PORT=5000

# Environment: dev or prod
VITE_NODE_ENV=dev
```

### Local Development

When running the frontend and backend on the same machine:

```env
VITE_NODE_SERVER_LOCAL_HOSTNAME=http://localhost
VITE_NODE_SERVER_HOSTNAME=
VITE_NODE_SERVER_PORT=5000
VITE_NODE_ENV=dev
```

### Accessing From Other Devices

`localhost` refers to the device making the request. Therefore, when accessing Kinetix from another device on the same local network, use the local network IP address of the machine running the server.

For example:

```env
VITE_NODE_SERVER_HOSTNAME=http://172.19.179.154
```

Replace the IP address with the current local network IP address.

This allows the application to be accessed from other devices connected to the same network.

> The LAN configuration is intended for local development and testing.

## ✨ Features

- User account creation and authentication
- Create and manage channels
- Upload videos
- Browse and consume video content
- Subscribe to channels
- Like and dislike videos
- Comment on videos
- Responsive video streaming interface
- Client-side routing
- Global state management with Redux Toolkit
- API communication using Axios
- Form management with React Hook Form
- Responsive UI with Tailwind CSS

## 🚀 Tech Stack

- **React** — UI library
- **Vite** — Frontend build tool
- **Redux Toolkit** — State management
- **React Router** — Client-side routing
- **Axios** — HTTP client
- **Tailwind CSS** — Styling
- **React Hook Form** — Form management
- **date-fns** — Date utilities
- **React Icons** — Icon library
- **ESLint** — Code linting

## 📜 Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Create a production build    |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                   |

## 🔗 Associated Repository

The frontend is part of the Kinetix video streaming platform and works alongside its associated backend repository.

**Backend:** [Kinetix Backend](https://github.com/devsubhamdas/kinetix-backend)

## 🚧 Project Status

Kinetix is an ongoing project. The core video streaming, user interaction, channel, and authentication functionality is being developed as the platform evolves.

## 📄 License

This project is licensed under the **MIT License**.
