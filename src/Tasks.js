
import { HiOutlineMenu } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BsCheckLg } from 'react-icons/bs'
import { BiSave } from 'react-icons/bi'
import { RiAddFill } from 'react-icons/ri'
import { useState } from 'react'

import { IoIosAddCircleOutline } from 'react-icons/io'
import AddTasks from './AddTasks'



const Tasks = ({ backgroundColor }) => {

    const [menuTasks, setMenuTasks] = useState(true)

    const taskHandler = () => {
        setMenuTasks(!menuTasks)
    }

    const [modal, setModal] = useState(false)

    const modalHandler = () => {
        setModal(!modal)
    }

    const [inputText, setInputText] = useState('')

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const [todos, setTodos] = useState([])

    const todosHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, complete: false, id: Math.random() * 1000,edit: false }
        ])
        modalHandler(false)
        setInputText(' ')

    }

    

    const [deleteButton,setDeleteButton] = useState(false);

    const deletHandler =() => {
        setDeleteButton(!deleteButton)
    }





    return (
        <div >

            <div className="flex justify-self-center  flex-col w-[90%] mx-[5%]  md:w-[40%] md:mx-[30%] ">
                <p className="text-center text-white ">{(backgroundColor == 'bg-red-500') ? 'Time to focus!' : 'Time for a break!'}</p>
                <div className="flex flex-row justify-between  p-3">
                    <span className='text-2xl text-white'>Tasks</span>
                    <button onClick={taskHandler}><HiOutlineMenu size={30} className='text-white ' /></button><ul className={!menuTasks ? 'fixed border p-3 text-ellipsis text-black text-left bg-white left-[30%] my-6 md:left-[58%] ease-in-out duration-1000' : 'fixed hidden'}>
                        <button className={` flex   py-2 border-b border-b-gray-200 `}><RiDeleteBinLine size={20} /><li className='px-1'>Clear finished tasks</li></button>
                        <button className={` flex   py-2 border-b border-b-gray-200 `}><BsCheckLg size={20} /><li className='px-1'>Clear act pomodoros</li></button>
                        <button className={` flex   py-2 border-b border-b-gray-200 `}><BiSave size={20} /><li className='px-1'>Save as template</li></button>
                        <button className={` flex   py-2 border-b border-b-gray-200 `}><RiAddFill size={20} /><li className='px-1'>Add from templates</li></button>
                        <button className={` flex   py-2 border-b border-b-gray-200 `}><RiDeleteBinLine size={20} /><li className='px-1'>Clear all tasks</li></button>
                    </ul>


                </div>
                <hr className='' />

                <AddTasks deleteButton={deleteButton} setDeleteButton={setDeleteButton} setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} modalHandler={modalHandler} modal={modal} setModal={setModal} todosHandler={todosHandler} inputTextHandler={inputTextHandler} deletHandler={deletHandler}/>



            </div>


            <div className=" flex justify-center py-3 text-center">
                <button className='flex border px-28 py-3 border-dashed md:w-[40%] md:mx-[30%] md:flex justify-center  ' onClick={modalHandler}><IoIosAddCircleOutline size={20} className='md:' />Add Task</button>




            </div>

            <div className={modal ? 'absolute text-center my-[-15%] w-[90%] mx-[5%]  md:w-[40%] md:mx-[30%] md:my-[0%] rounded-2xl h-[28%] bg-white flex flex-col justify-between pt-10 ease-in duration-300' : 'hidden'}>
                <input onChange={inputTextHandler} value ={inputText} type="text" className='bg-gray-50 mx-[5%] border-none focus:outline-none placeholder:italic  placeholder:text-slate-400' placeholder="What are you working on?" maxlength="30"/>
                <div className='flex justify-end bg-gray-200 h-[30%] px-6 '>
                    
                    <button className='px-6' onClick={() => modalHandler(false)}>Cancel</button>
                    <button className='bg-gray-400 rounded-2xl px-4' onClick={todosHandler}>Save</button>



                </div>



            </div>


        </div>


    );
}

export default Tasks;