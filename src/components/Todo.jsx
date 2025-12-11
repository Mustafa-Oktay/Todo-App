import React, { useState, useRef, useEffect } from 'react';
import { FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import TodoItem from './TodoItem';

const Todo = () => {

  const [todos, setTodos] = useState([]);
  const data = useRef();

  const addTodos = () => {
    const inputText = data.current.value.trim();
    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodos(prev => [...prev, newTodo]);
    data.current.value = "";
  };

  const toggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => 
      prevTodos.filter(todo => todo.id !== id)  // 🔥 DOĞRU SİLME
    );
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className='place-self-center bg-white w-[450px] h-[600px] p-12 flex flex-col gap-10 rounded-lg'>

        <h1 className='text-3xl font-semibold tracking-wider flex gap-2 items-center'>
          <FaClipboardList /> 
          Todo App
        </h1>

        {/* Arama Kısmı */}
        <div className='flex items-center bg-[#EEEEEE] rounded-full'>
          <input 
            ref={data}
            type="text"
            className='border-none outline-none p-3.5 flex-1 bg-transparent placeholder:text-slate-400'
            placeholder='Yeni Bir Görev Gir.'
          />
          
          <div 
            className='bg-[#00AD85] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer'
            onClick={addTodos}
          >
            <FaPlus className='size-7 text-[#EEEEEE]'/>
          </div>
        </div>

        {/* Görevler */}
        <div className='mt-5'>
          {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggle={toggle} 
              deleteTodo={deleteTodo}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default Todo;
