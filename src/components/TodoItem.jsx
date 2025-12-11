import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

const TodoItem = ({ todo, toggle, deleteTodo }) => {
  return (
    <div 
      className='w-full flex items-center p-2 py-4 gap-2 border-b border-[#00AD85] cursor-pointer' 
      onClick={() => toggle(todo.id)}
    >

      {todo.isComplete 
        ? <FaRegCheckCircle className='text-[#00AD85] size-5' /> 
        : <FaRegCircle className='text-[#00AD85] size-5' />
      }

      <p className={`flex-1 ${todo.isComplete ? "line-through text-gray-400" : ""}`}>
        {todo.text}
      </p>

      <FaRegTrashAlt 
        className='text-[#e01056] size-5 hover:scale-110 transition-all'
        onClick={(e) => {
          e.stopPropagation(); // toggle çalışmasın
          deleteTodo(todo.id);
        }}
      />
    </div>
  )
}

export default TodoItem;
