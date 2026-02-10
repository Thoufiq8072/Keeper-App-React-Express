# Keeper App

A full-stack note-taking app built with React (Vite) on the frontend and Express on the backend.

## What Has Been Implemented

- React app scaffolded with Vite.
- Reusable UI components:
  - `Header`
  - `Footer`
  - `CreateArea`
  - `Note`
- Notes are fetched from the backend when the app loads (`GET /api/notes`).
- New notes can be created from the UI and saved through the API (`POST /api/notes`).
- Notes can be deleted from the UI and backend (`DELETE /api/notes/:id`).
- Axios is used for frontend API requests.
- Vite dev server proxy is configured so `/api` requests are forwarded to `http://localhost:3000`.
- Backend uses UUIDs for note IDs and stores notes in an in-memory array.

## Tech Stack

- Frontend: React 19, Vite, Axios
- Backend: Express 5, CORS, UUID
- Styling: CSS files per component + global CSS

## Project Structure

```text
Keeper-app/
  backend/
    index.js
  src/
    components/
      Header/
      Footer/
      CreateArea/
      Note/
    App.jsx
    main.jsx
  package.json
  vite.config.js
```

## API Endpoints

- `GET /api/notes` - returns all notes
- `POST /api/notes` - creates a new note
- `DELETE /api/notes/:id` - deletes a note by id

## How To Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the backend server (port `3000`):

   ```bash
   node backend/index.js
   ```

3. In another terminal, start the frontend dev server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser (usually `http://localhost:5173`).

## Current Limitations

- Notes are stored in memory only; restarting the backend clears all data.
- No database integration yet.
- Minimal validation/error UI handling.
