import React from 'react'
import {BsFillBookFill} from 'react-icons/bs'
import logo from './Images/loginImage.png'

import { useNavigate } from 'react-router-dom'

const LoginForm = ({email,setEmail,password,setPassword,lCred,setLCred,setUsername})=> {



   
    const navigate = useNavigate()


    function checkUser(cred){
        return cred.Email === email && cred.Password === password
    }

    const onSubmitLogin =(event) =>{
        event.preventDefault()
        var a = lCred.find(checkUser)
        if(a){
            setUsername(email)
            setEmail("")
            setPassword("")
            alert("User Signed")
            navigate("/home/inbox")
        }
        else{
            alert("Wrong Credentials")
        }
        
    }

    const passwordChangeHandler = (event) =>{
        setPassword(event.target.value)
            
    }

    const emailChangeHandler =(event) =>{
        setEmail(event.target.value)
        
    }

  return (
    <div className='w-screen h-screen '>
        <div className='flex justify-center align-center mt-7 w-full h-full'>
            <div className='flex-col  w-9/12 h-5/6  gap-32'>
                <div className='flex justify-start my-4 cursor-pointer'>
                    <BsFillBookFill size={32} color={'red'}/> 
                     <h1 className='mx-3 text-2xl text-red-500 font-mono font-bold ' onClick={()=>navigate("/index")}>  todoList</h1>
                </div>
                <div className='flex  content-start h-full'>
                    <div className='flex-col w-1/2'>
                        <div className='text-3xl h-1/6 cursor-pointer'>Login</div>
                        <form className='flex-col  h-5/6'>
                            <div className='w-full h-12'>
                                <textarea className='w-full resize-none' placeholder='User Name' required value={email} onChange={emailChangeHandler} />
                            </div>
                            <div className='w-full h-12'>
                                <textarea className='w-full resize-none' placeholder='Password' required value={password} onChange={passwordChangeHandler} />
                            </div>
                            <div className='w-full h-12 flex justify-center bg-red-500 hover:bg-red-600 cursor-pointer rounded-md' onClick={onSubmitLogin}>
                                <button  className='text-2xl '>Log in</button>
                            </div>
                            <div className='w-full h-12 '>
                                <p className='font-extralight cursor-pointer underline'>Forget Password</p>
                            </div>
                            <div className='w-full h-12 cursor-pointer'>
                                <p onClick={()=>navigate("/")}>Dont have an account? Sign up</p>
                            </div>
                        </form>
                    </div>

                    <div className='w-1/2'>
                        <img className="" src={logo} alt={"Carlie Anglemire"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm