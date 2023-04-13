import React from 'react'
import { useEffect } from 'react'
import {VscEdit} from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

const TodosList = ({todos,setTodos,date,setDate,setEditTodos,username})=> {
    const handelDelete =({id}) =>{      
        setTodos(todos.filter((todo)=> todo.id !==id ))
    }

    const dateChangeHandler = (event) => {
        event.preventDefault()
        
    }
    const editHandler =({id}) =>{
        const findTodo = todos.find((todo)=> todo.id === id)
        setEditTodos(findTodo)
    }
    const Navigate = useNavigate()
    useEffect(()=>{
        if(!username){
            Navigate("/")
        }
    },[username,Navigate])
    
  return (
    <><ul className='flex-row justify-evenly'>
          {todos.map((todo) => {
            if(todo.username === username){
                return <li key={todo.id} className="border-b divide-slate-200 my-5 text-sm flex gap-3 justify-between cursor-pointer">
                <div className='flex gap-3 '>
                    <div>
                        <input className='cursor-pointer' type="radio" onClick={() => { handelDelete(todo) } }></input>
                    </div>
                    <div >
                        <div className='flex-col gap-5 w-fit h-fit'>
                            <input className='focus:outline-none cursor-pointer'
                                type='text'
                                value={todo.title}
                                onChange={(event) => { event.preventDefault() } } />
                        </div>


                        <div>
                            <textarea className='font-light  cursor-pointer resize-none  focus:outline-none'
                                type='text'
                                value={todo.des}
                                onChange={(event) => { event.preventDefault() } } />
                        </div>




                        <div className='flex font-light'>


                            <input type="date" id="start" name="trip-start" onClick={dateChangeHandler}
                                onChange={dateChangeHandler}
                                value={todo.date}
                                min="2023-01-01" max="2050-12-01" />

                        </div>



                    </div>
                </div>
                <div className='flex'>
                    <div></div>
                    <VscEdit className='text-right align-bottom' onClick={()=>editHandler(todo)}></VscEdit>
                </div>

            </li>

            }
            else{
               return null
            }
              


          })}

      </ul>
        </>
  )
}

export default TodosList