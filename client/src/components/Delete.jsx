import React from 'react'
import { useParams } from 'react-router-dom'
let { id } = useParams()


const Delete = () => {
   
    async function deletePost() {
        await axios.delete(`http://localhost:3001/listings/${id}`);
        setStatus('Delete successful');
    }

   const handleDelete = () => {
      deletePost()
   }

  return (
    <div>
    <button onClick={handleDelete}>Delete Listing</button>
    </div>
  )
}

export default Delete