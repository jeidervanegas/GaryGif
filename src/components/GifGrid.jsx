
import { GitItem } from './GitItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);


  return (
    <div className="w-11/12 m-auto">
      <h3 className="text-3xl py-10 text-center uppercase font-bold text-gray-600">
        {category}
      </h3>
      {
        isLoading && (<h2>Cargando...</h2>) 
        
      }
      
      <div className="w-11/12 m-auto">
        <div className="bg-gray-100 p-5 shadow  grid grid-cols-2 md:grid-cols-4  gap-4">
          {images.map((image) => (
            <GitItem 
                key={image.id} 
                {...image}
                />
          ))}
        </div>
      </div>
    </div>
  )
}
