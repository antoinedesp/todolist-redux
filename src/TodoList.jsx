import React from "react";
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./slices/todoSlice.jsx";
import TodoItems from "./TodoItems.jsx";
import TodoFilter from "./TodoFilter.jsx";

export default function TodoList(props) {

    const dispatch = useDispatch();

    const listItems = useSelector((state) => state.todo.value);
    console.log(listItems);
    const [filteredListItems, setFilteredListItems] = useState([]);
    const [filterValue, setFilterValue] = useState('all');
    const [newTaskValue, setNewTaskValue] = useState('');

    useEffect(() => {
        setFilteredListItems(listItems);
    }, [filterValue]);

    useEffect(() => {
        setFilter(filterValue);
    }, [listItems]);

    function addTask() {
        if(newTaskValue === '') return;
        dispatch(addTodo({ value: newTaskValue, checked: false }));
        setNewTaskValue('');
    }

    function newTaskTextChangedHandler(e) {
        setNewTaskValue(e.target.value);
    }

    function setFilter(newValue) {
        switch(newValue) {
            case 'all':
                setFilterValue('all');
                setFilteredListItems(listItems);
                break;
            case 'done':
                setFilterValue('done');
                setFilteredListItems(listItems.filter((listItem) => listItem.checked === true ));
                break;
            case 'undone':
                setFilterValue('undone');
                setFilteredListItems(listItems.filter((listItem) => listItem.checked === false ));
                break;
            default: 
                break;
        }
    }

    return (
        <>
            {
                filteredListItems.map((listItem, key) => {
                    return <TodoItems key={key} item={listItem}  />
                })
            }
            <input name="newTask" type="text" onChange={newTaskTextChangedHandler}/>
            <input type="submit" onClick={addTask}/>

            <TodoFilter onFilterUpdateCallback={ setFilter }/>
        </>
    );
}


