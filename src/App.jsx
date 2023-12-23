import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function App() {
  const [categories, setCategories] = useState([''])

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return

    setCategories([onNewCategory, ...categories])
  }

  return (
    <div className="">
      <div className="bg-blue-500">
        <div className='w-11/12 m-auto'>
          <div className=" flex  py-4">
            <h1 className="text-center text-3xl text-white ">
              Gary<span className="font-extrabold italic">Gifs</span>
            </h1>
          </div>
        </div>
          <div className="flex bg-gray-800 justify-center items-center py-6">
            <AddCategory onNewCategory={onAddCategory} />
          </div>
      </div>

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </div>
  )
}

export default App
// cIiNEogPAJVJZLvGmo6SGboZuFXyhA11
