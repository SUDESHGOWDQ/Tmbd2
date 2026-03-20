# TMDB Movie App

This project is a movie browsing application built with React and Vite. It allows users to explore trending, upcoming, and popular movies, view detailed information, and watch trailers.

## Project Structure

The project is organized as follows:

```
src/
├── api/                # API service functions
├── assets/             # Static assets (images, etc.)
├── Components/         # Reusable UI components
│   ├── Button/         # Button component
│   ├── Card/           # Card component
│   ├── Input/          # Input component
│   ├── Loader/         # Loader component
│   ├── Modal/          # Modal component
│   ├── Pagination/     # Pagination component
├── context/            # React Context for state management
├── hooks/              # Custom React hooks
├── Layout/             # Layout components
│   ├── Navbar/         # Navigation bar
│   ├── Footer/         # Footer
│   ├── Movie/          # Movie details layout
│   │   ├── Cast/       # Cast details
│   │   ├── Person/     # Person details
│   │   ├── Trailer/    # Movie trailer
│   ├── 404Error/       # 404 Error page
├── pages/              # Page components
│   ├── About/          # About page
│   ├── Contact/        # Contact page
│   ├── Dashboard/      # Dashboard page
│   │   ├── Home/       # Home section
│   │   ├── SidePanel/  # Side panel
│   ├── Trending/       # Trending movies page
│   ├── Upcoming/       # Upcoming movies page
├── router/             # Application routing
├── App.jsx             # Root component
├── main.jsx            # Application entry point
├── index.css           # Global styles
```

## Features
- Browse trending, upcoming, and popular movies
- View detailed movie information
- Watch trailers
- Responsive design

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd tmbd-movie
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

## Technologies Used
- React
- Vite
- React Router
- Axios
- TMDB API

## License
This project is licensed under the MIT License.
