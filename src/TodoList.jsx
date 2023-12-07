import React from "react";
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./slices/todoSlice.jsx";
import TodoItems from "./TodoItems.jsx";
import TodoFilter from "./TodoFilter.jsx";

export default function TodoList() {

    const dispatch = useDispatch();
    const filterValue = useSelector((state) => state.todoFilter.value);
    const listItems = useSelector((state) => state.todo.value);
    const [newTaskValue, setNewTaskValue] = useState('');
    const [newTaskDate, setNewTaskDate] = useState('');

    function addTask() {
        if(newTaskValue === '') return;
        dispatch(addTodo({ value: newTaskValue, date: newTaskDate, checked: false, }));
        setNewTaskValue('');
    }

    function newTaskTextChangedHandler(e) {
        setNewTaskValue(e.target.value);
    }

    function newTaskDateChangedHandler(e) {
        setNewTaskDate(e.target.value);
    }

    return (
        <div className="flex flex-col space-y-2">
            {
                listItems.map((listItem, key) => {
                    if (filterValue === 'all') {
                        return <TodoItems key={key} item={listItem}/>
                    }
                    if (filterValue === 'done' && listItem.checked === true) {
                        return <TodoItems key={key} item={listItem}/>
                    } else if (filterValue === 'undone' && listItem.checked === false) {
                        return <TodoItems key={key} item={listItem}/>
                    }
                })
            }
            <div className="py-6 flex flex-col space-y-2">
                <div className="flex space-x-2">
                    <input
                        className="flex items-center justify-center font-semibold text-slate-500 w-full py-4 px-8 border-2 rounded transition hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-600 focus:text-slate-600 hover:border-slate-400 focus:border-slate-400"
                        name="newTask"
                        type="text"
                        onChange={newTaskTextChangedHandler}/>

                    <input
                        className="flex items-center justify-center font-semibold text-slate-500 w-1/12 py-4 px-8 border-2 rounded transition hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-600 focus:text-slate-600 hover:border-slate-400 focus:border-slate-400"
                        type="submit"
                        onClick={addTask}
                        value="+"/>
                </div>
                <input
                    className="flex items-center justify-center font-semibold text-slate-500 w-full py-4 px-8 border-2 rounded transition hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-600 focus:text-slate-600 hover:border-slate-400 focus:border-slate-400"
                    type="date"
                    onChange={newTaskDateChangedHandler}/>
            </div>

            <TodoFilter/>
        </div>
    );
}


