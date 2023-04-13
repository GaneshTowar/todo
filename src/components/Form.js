import React from 'react'
import { useEffect } from 'react'
import {v4 as uuidv4} from "uuid"
import {MdAdd} from "react-icons/md"

const Form = ({Input,setInput,todos,setTodos,desc,setDesc,date,setDate,editTodos,setEditTodos,username}) => {


  var day = new Date();
  var dd = day.getDate();
  var mm = day.getMonth()+1; 
  var yyyy = day.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 

  if(mm<10) 
  {
      mm='0'+mm;
  } 


    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onDesChange =(event) =>{
      setDesc(event.target.value)
    }

    const onDatechange = (event) =>{
      setDate(event.target.value)
    }

    const updateTodos = (title, id, des, date,username) =>{
        const newTodo = todos.map((todo)=>{
          return todo.id===id ? {title,id,des,date,username} : todo
        })
        setTodos(newTodo)
        setEditTodos("")
    }
    useEffect(()=>{
      if(editTodos){
        setInput(editTodos.title)
        setDesc(editTodos.des)
        setDate(editTodos.date)
      }else{
        setInput("")
        setDesc("")
        setDate("")
      }
    },[setInput,editTodos,setDesc,setDate])

    const onSubmitForm =(event)=>{
        event.preventDefault();
        if(!editTodos){
          setTodos([...todos,{id: uuidv4(), title : Input,des : desc ,date:date,username:username}]);
          setInput("");
          setDesc("");
          setDate("");
        }else{
          updateTodos(Input, editTodos.id ,desc ,date ,username )
        }
        
    }

  return (
    <form onSubmit={onSubmitForm} className="flex">
        <button type='submit' className=' mx-4 '><MdAdd className='cursor-pointer text-red-400 hover:bg-red-500 rounded-full hover:text-white' size={22}></MdAdd></button>
        <div className='flex-row'>
          <input type="text" placeholder='  Add task  ' value={Input} required onChange={onInputChange} />
          <input type="text" placeholder='  Add Des  ' value={desc} required onChange={onDesChange} />
          <input type="date" value={date} min={`${yyyy}-${mm}-${dd}`} required onChange={onDatechange}/>
        </div>
    </form>
  )
}

export default Form
 