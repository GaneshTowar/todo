
import './App.css';
import React, { useMemo } from 'react';
import InboxApp from './components/InboxApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegForm from './components/RegForm.js';
import LoginForm from './components/LoginForm.js'
import { useState ,useEffect } from 'react';
import Home from './components/Home';
import Error from './components/Error';
import TodosList from './components/TodosList';




const App = () => {


  const getLocalitems=()=>{
    const items = localStorage.getItem('users')
    if(items){
       return JSON.parse(localStorage.getItem('users'));
    }else{
      return [];
    }
  }

  const getLocalUser=()=>{
    const items = localStorage.getItem('user')
    if(items){
       return JSON.parse(localStorage.getItem('user'));
    }else{
      return null;
    }
  }

  const [email,setEmail] = useState("")
  const [password,setPassword] =useState("")
  const [lCred,setLCred] =useState(getLocalitems())
  const [username,setUsername] = useState(getLocalUser)


  const getLocalItem=()=>{
    const items = localStorage.getItem('list')
    if(items){
       return JSON.parse(localStorage.getItem('list'));
    }else{
      return [];
    }
  }
  
  const [Input,setInput] = useState("")
  const [desc,setDesc] = useState("")
  const [todos,setTodos] = useState(getLocalItem())
  const [toggle,setToggle] = useState(false)
  const [date,setDate] = useState("")
  const [editTodos,setEditTodos] = useState(null)


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
 
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(todos))
    localStorage.setItem('user',JSON.stringify(username))
  }, [todos,username]) 
  

      var today = useMemo(()=>{
                  return  todos.filter((todo)=>{
                              return todo.date === `${yyyy}-${mm}-${dd}` && todo.username === username
      })},[todos,dd,yyyy,mm,username])

      var upcoming =  useMemo(()=>{
              return todos.filter((todo)=>{
                                return todo.date !== `${yyyy}-${mm}-${dd}` && todo.username === username
                    })},[todos,dd,yyyy,mm,username]) 
      var inbox = useMemo(()=>{
            return todos.filter((todo)=>{ 
              
              return todo.username === username
            })
      },[todos,username])

  useEffect(() => {
    localStorage.setItem('users',JSON.stringify(lCred))
  }, [lCred]) 
 
  return (
    
    <>
     
      
        <Routes>
          <Route  path="/home/" element={<InboxApp username={username}
                                                    setUsername={setUsername}
                                                    Input = {Input}
                                                    setInput ={setInput}
                                                    desc= {desc}
                                                    setDesc ={setDesc}
                                                    todos ={todos}
                                                    setTodos ={setTodos}
                                                    toggle ={toggle}
                                                    setToggle ={setToggle}
                                                    date ={date}
                                                    setDate ={setDate}
                                                    editTodos ={editTodos}
                                                    setEditTodos ={setEditTodos}
                                                    todaylen={today.length}
                                                    upcominglen={upcoming.length}
                                                    inboxlen={inbox.length}/>}>

                    <Route path="inbox" element={ <TodosList
                                                    todos ={inbox}
                                                    setTodos={setTodos}
                                                    date ={date}
                                                    setDate ={setDate}
                                                    setEditTodos={setEditTodos}
                                                    username={username}
                                                  /> }/>
                    
                    <Route path="today" element={ <TodosList
                                                    todos ={today}
                                                    setTodos={setTodos}
                                                    date ={date}
                                                    setDate ={setDate}
                                                    setEditTodos={setEditTodos}
                                                    username={username}
                                                  /> }/>
                    
                    <Route path="upcoming" element={ <TodosList
                                                    todos ={upcoming}
                                                    setTodos={setTodos}
                                                    date ={date}
                                                    setDate ={setDate}
                                                    setEditTodos={setEditTodos}
                                                    username={username}
                                                  /> }/>
                    
                    </Route>
          <Route exact path="/" element={<RegForm
                                            email=  {email}
                                            setEmail = {setEmail}
                                            password= {password}
                                            setPassword = {setPassword}
                                            lCred = {lCred}
                                            setLCred = {setLCred}
                                            setUsername= {setUsername}/>}/>
          <Route exact path="/login" element={<LoginForm
                                                email=  {email}
                                                setEmail = {setEmail}
                                                password= {password}
                                                setPassword = {setPassword}
                                                lCred = {lCred}
                                                setLCred = {setLCred}
                                                setUsername= {setUsername}/>}/>
          <Route exact path="/index" element={<Home/>}/>
          <Route  path="*" element={<Error/>}/>
        </Routes>

    </>
    
     
 
    
  );
}

export default App;
