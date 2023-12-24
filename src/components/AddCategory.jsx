import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length <= 1) return
    
    setInputValue('')
    onNewCategory(inputValue.trim())
  }
  return (
    <form className=' w-full flex justify-center ' onSubmit={handleSubmit}>
      <input
        className='p-3 w-2/4 rounded-full'
        type="text"
        placeholder="Buscar tus Gifs Favoritos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
    </form>
  )
}
