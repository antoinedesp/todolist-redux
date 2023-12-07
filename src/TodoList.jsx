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

    function addTask() {
        if(newTaskValue === '') return;
        dispatch(addTodo({ value: newTaskValue, checked: false }));
        setNewTaskValue('');
    }

    function newTaskTextChangedHandler(e) {
        setNewTaskValue(e.target.value);
    }

    return (
        <>
            {
                listItems.map((listItem, key) => {
                    if(filterValue === 'all') {
                        return <TodoItems key={key} item={listItem}  />
                    }
                    if(filterValue === 'done' && listItem.checked === true) {
                        return <TodoItems key={key} item={listItem}  />
                    }
                    else if(filterValue === 'undone' && listItem.checked === false) {
                        return <TodoItems key={key} item={listItem}  />
                    }
                })
            }
            <input name="newTask" type="text" onChange={newTaskTextChangedHandler}/>
            <input type="submit" onClick={addTask}/>
            <TodoFilter/>
        </>
    );
}


