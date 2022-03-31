import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const Delete = () => {
  

  let { id } = useParams()

    async function deletePost() {
        await axios.delete(`http://localhost:3001/listings/${id}`);
       
    }

   const handleDelete = () => {
      deletePost()
   }

  return (
    <div>
    <button className="del-btn" onClick={handleDelete}>Delete Listing</button>
    </div>
  )
}

export default Delete