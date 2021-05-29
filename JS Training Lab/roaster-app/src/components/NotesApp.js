import React, { useState } from 'react'

const NotesApp =() =>{

    const [notes,setNotes] =useState([]) //arry dest
    const [title,setTitle]= useState('')
    const [body,setBody]= useState('')


    const addNote=(e) =>{
        e.preventDefault()
        setNotes([
            ...notes,
            {title,body}
        ])
        setTitle('')
        setBody('')
    }

 
return (
    <div>
{notes.map((note) =>(
    <div key ={note.title}>

    <h3>{note.title}</h3>
    <h3>{note.body}</h3>
    </div>
))}





<h3>User Notes</h3>

<form onSubmit={addNote} >
    <input value={title} onChange={(e) => setTitle(e.target.value)}/>
    <input value={body} onChange={(e) => setBody(e.target.value)}/>
    <button>Add</button>
</form>
    </div>
)}

export default NotesApp