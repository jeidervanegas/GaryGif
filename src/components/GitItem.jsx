

export const GitItem = ({url, title}) => {
  return (
    <div>
        
        <img className="h-36 w-full object-cover rounded-sm" src={url} alt={title} />
        <p className="text-center p-4 text-blue-600 font-bold">{title}</p>
    </div>
  )
}
