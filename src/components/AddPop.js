import React from 'react'
import Form from './Form'


function AddPop({Input,setInput,todos,setTodos,desc,setDesc,date,setDate,editTodos,setEditTodos,username,toggleAddpop,setToggleAddpop}) {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm ${toggleAddpop?"flex":"hidden"} justify-center items-center `}>
        <div className='bg-white h-32 flex flex-col gap-3 items-center justify-center rounded-md p-4'>
                <Form 
                Input={Input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                desc ={desc}
                setDesc ={setDesc}
                date ={date}
                setDate ={setDate}
                editTodos={editTodos}
                setEditTodos={setEditTodos}
                username={username}
                
                    />
                    <div onClick={()=>{setToggleAddpop(!toggleAddpop)}} className='bg-red-400 rounded-md shadow-md p-1 cursor-pointer'>Close</div>
        </div>
        
     
    </div>
  )
}

export default AddPop