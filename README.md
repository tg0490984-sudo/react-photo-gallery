# React Photo Gallery

A simple and responsive photo gallery built using React, Vite and Tailwind CSS. This project fetches photos from the Picsum Photos API and allows users to search for photos by author and save their favourite photos.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Displays photos in a responsive grid layout.
- Search photos by author name.
- Add and remove photos from favourites.
- Saves favourite photos using localStorage.
- Loading and error handling.
- Custom React hook for fetching photos.
- Uses useReducer to manage favourite photos.

## Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS
- Picsum Photos API
- HTML

## Project Structure

```text
src/
├── assets/
├── components/
├── hooks/
│   └── useFetchPhotos.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/tg0490984-sudo/react-photo-gallery.git
```

### 2. Open the project folder

```bash
cd react-photo-gallery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## API Used

[Picsum Photos](https://picsum.photos/)

The application uses the Picsum Photos API to fetch photo details and display images in the gallery.

## What I Learned

While working on this project, I practised:

- Working with React hooks.
- Fetching data from an external API.
- Managing state using useReducer.
- Using localStorage to persist data.
- Implementing search functionality.
- Building responsive layouts with Tailwind CSS.

## Author

Tanya Gupta

GitHub: [tg0490984-sudo](https://github.com/tg0490984-sudo)