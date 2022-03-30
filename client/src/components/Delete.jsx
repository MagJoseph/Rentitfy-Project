import React from 'react'

const Delete = () => {
   
    async function deletePost() {
        await axios.delete('http://localhost:3001/listings/:id');
        setStatus('Delete successful');
    }

   

  return (
    <div>Delete</div>
  )
}

export default Delete