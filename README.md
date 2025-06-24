# Game Database API

A RESTful API built with NestJS that provides access to game information and details. This API serves as a backend service for game-related applications, offering endpoints to search for games and retrieve detailed information about specific games.

## Features

- 🎮 Search games by query
- 📊 Get detailed game information by slug
- 🚦 Rate limiting with throttling
- 🌐 CORS support for cross-origin requests
- 🔧 Environment-based configuration
- 📝 TypeScript support
- ✅ Comprehensive testing setup

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **HTTP Client**: Axios
- **Configuration**: @nestjs/config
- **Rate Limiting**: @nestjs/throttler
- **Testing**: Jest, Supertest
- **Code Quality**: ESLint, Prettier

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- An API key for the game database service

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd game-database-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
BASE_URL=your_game_api_base_url
API_KEY=your_api_key
CLIENT_DOMAIN=http://localhost:3001
PORT=3000
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

The API will be available at `http://localhost:3000/api`

## API Endpoints

### Games

#### Get Games
```http
GET /api/games?search={query}
```

**Parameters:**
- `search` (string): Search query for games

**Response:**
```json
[
  {
    "id": 1,
    "name": "Game Name",
    "slug": "game-slug",
    // ... other game properties
  }
]
```

#### Get Game Details
```http
GET /api/games/{slug}
```

**Parameters:**
- `slug` (string): Game slug identifier

**Response:**
```json
{
  "id": 1,
  "name": "Game Name",
  "description": "Game description",
  // ... detailed game properties
}
```

## Rate Limiting

The API implements rate limiting with the following configuration:
- **Limit**: 10 requests per minute per IP
- **Time Window**: 60 seconds

## Development

### Code Formatting
```bash
npm run format
```

### Linting
```bash
npm run lint
```

### Testing
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Watch mode
npm run test:watch
```

### Building
```bash
npm run build
```

## Project Structure

```
src/
├── app.controller.ts     # Main controller with game endpoints
├── app.service.ts        # Business logic for game operations
├── app.module.ts         # Root module configuration
└── main.ts              # Application entry point

test/
└── app.e2e-spec.ts      # End-to-end tests
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BASE_URL` | Base URL for the external game API | Yes |
| `API_KEY` | API key for authentication | Yes |
| `CLIENT_DOMAIN` | Allowed origin for CORS | No |
| `PORT` | Server port (default: 3000) | No |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
- [Ruben O. Alvarado](https://github.com/RubenOAlvarado)
- [LinkedIn](https://www.linkedin.com/in/ruben-alvarado-molina-9020010/)
- [X (twitter)](https://twitter.com/RubenOAlvarado)
- [Instagram](https://www.instagram.com/alvaradorubo/)

*Built with ❤️ using NestJS*
