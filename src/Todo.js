import React, { useState } from 'react'
import { RiMenu2Fill } from 'react-icons/ri'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdOutlineSystemUpdateAlt } from 'react-icons/md'

function Todo({ todosHandler, inputTextHandler, text, setInputText, inputText, todos, setTodos, modalHandler, setModal, modal, deletHandler, setDeleteButton, deleteButton, todo }) {






    const showDelete = (e) => {
        setModal(!modal)
        setDeleteButton(!deleteButton)
        e.preventDefault();
    }

    const remeveHandler = () => {
        if(window.confirm('Are sure you want to delete this task!')){
            setTodos(todos.filter((el) => el.id !== todo.id))
        }
        
    }

    const [editText, setEditText] = useState(todo.text)
    const [showInput, setShowInput] = useState(true)

    const updateHandler = () => {
        setShowInput(!showInput)
        setEditText()
        
    }

    const inputHandler =  (e) => {
        console.log(e.target.value)   
    }

    



    return (

        <div>


            <div className='bg-gradient-to-r from-purple-500 to-pink-500 my-1 rounded-xl flex justify-between px-5 py-2 md:py-2 border-2 border-slate-700 '>
                <div>
                    <li className='flex '><input onChange={inputHandler} value={editText} maxlength="30" type="text" className={!showInput ?'flex bg-gradient-to-r from-purple-500 to-pink-500 ' : 'hidden' } />{showInput&&text}</li>
                </div >
                <div className='flex '>
                    <button onClick={updateHandler} className='ml-[20%] p-[0%] hover:bg-gray-400 rounded-2xl '><MdOutlineSystemUpdateAlt color='white'/></button>
                    <button className='ml-[10%] hover:bg-gray-400 rounded-2xl' onClick={remeveHandler}><RiDeleteBin6Line color='white'/></button>
                    <button onClick={showDelete} className='hover:bg-gray-400 rounded-2xl'><RiMenu2Fill size={23} color='white'/></button>

                </div>
            </div>

            



        </div>

    )
}

export default Todo