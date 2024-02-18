import { useState } from 'react'
import { ImageCard } from './components/ImageCard'
import { SearchForm } from './components/SearchForm'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    searchImages(searchTerm)
  }, [searchTerm]);

  const searchImages = (query) => {
    fetch(`https://pixabay.com/api/?key=42425573-9a7bcded237c3e6f35f9bf8f7&q=${query}&image_type=photo`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImages(data.hits)
      });
  }

  return (
    <div className='mx-auto'>
      
      <div className="m-10">
        <SearchForm searchText={(text) => setSearchTerm(text)} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {images.map((image, index) => {
        
          return <ImageCard imageUrl={image.previewURL} key={index}/>
        }
        )}
      </div>

    </div>
  )
}

export default App
