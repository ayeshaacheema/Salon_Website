# Salon Website

Full-stack salon site: TanStack Start frontend + Express/PostgreSQL backend.

## Environment setup

### Backend

1. Copy the example env file at the repo root:

```bash
cp .env.example .env
```

2. Edit `.env` and set:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://USER:PASSWORD@localhost:5432/salon` |
| `PORT` | API server port | `5000` |
| `FRONTEND_URL` | Allowed CORS origin(s), comma-separated. Defaults include local Vite ports. | `http://localhost:8080` |

Put these in `backend/.env` (preferred) or a root `.env`.

In local development, any `localhost` / `127.0.0.1` origin is also allowed automatically.

Do not commit `.env`. It is gitignored.

### Frontend

Create `frontend/.env`:

```
VITE_API_URL=http://localhost:5000/api
```

`VITE_API_URL` **must** include the `/api` prefix. The client appends `/services`, `/bookings`, and `/reviews`.

## Run locally

From the repo root (backend):

```bash
npm install
npm run seed
npm run dev
```

From `frontend/`:

```bash
npm install
npm run dev
```

| Script | What it does |
|--------|----------------|
| `npm start` | Start API (`node backend/server.js`) |
| `npm run dev` | Start API with nodemon |
| `npm run seed` | Insert default services if the table is empty |

## API overview

| Method | Path | Notes |
|--------|------|-------|
| `GET` | `/api/services` | Public list |
| `GET` | `/api/services/:id` | Public detail |
| `POST` | `/api/bookings` | Public create (validated) |
| `GET` | `/api/reviews` | Public list |
| `POST` | `/api/reviews` | Public create (validated) |

Booking list/update/delete routes are disabled until an admin dashboard exists.
