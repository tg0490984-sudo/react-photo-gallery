import {
  useState,
  useCallback,
  useMemo,
  useReducer,
  useEffect
} from 'react'

import useFetchPhotos from './hooks/useFetchPhotos'

// Reducer to manage favourite photos
function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      if (state.includes(action.id)) {
        return state.filter((id) => id !== action.id)
      }

      return [...state, action.id]

    default:
      return state
  }
}

function App() {
  // Fetch photos from custom hook
  const { photos, loading, error } = useFetchPhotos()

  // Search state
  const [searchTerm, setSearchTerm] = useState('')

  // Favourite state using useReducer
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    [],
    () => {
      try {
        return JSON.parse(localStorage.getItem('favorites')) || []
      } catch {
        return []
      }
    }
  )

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  // Handle search input
  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, [])

  // Filter photos by author name
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [photos, searchTerm])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Loading photos...</p>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Photo Gallery
      </h1>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search photos by author..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-lg shadow p-3"
          >
            <img
              src={photo.download_url}
              alt={photo.author}
              className="w-full h-48 object-cover rounded-md"
            />

            {/* Author Name and Favourite Button */}
            <div className="flex items-center justify-between mt-3">
              <p className="font-medium">
                {photo.author}
              </p>

              <button
                onClick={() =>
                  dispatch({
                    type: 'TOGGLE_FAVORITE',
                    id: photo.id
                  })
                }
                className="text-2xl"
                aria-label="Toggle favorite"
              >
                {favorites.includes(photo.id) ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* No Results Message */}
      {filteredPhotos.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No photos found.
        </p>
      )}

    </div>
  )
}

export default App
