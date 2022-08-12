import React from "react";
import Todo from "./Todo";


const AddTasks = ({setInputText,inputText,todos,setTodos,modalHandler,setModal,modal,todosHandler,inputTextHandler,deletHandler,deleteButton,setDeleteButton}) => {
    return (
        <div className="text-center">
            <ul>

            {todos.map((todo) => (
                    <Todo text={todo.text} 
                    todos={todos} setTodos={setTodos}
                    todo={todo}
                    modalHandler={modalHandler}
                    setModal={setModal}
                    modal={modal}
                    todosHandler={todosHandler}
                    inputTextHandler={inputTextHandler}
                    deletHandler={deletHandler}
                    key={todo.id}
                    deleteButton={deleteButton}
                    />
                ))} 
                    

            
                
            </ul>

        </div>



    );
}

export default AddTasks;