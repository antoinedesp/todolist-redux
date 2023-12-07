import React from "react";
import { useState, useEffect } from "react"

export default function TodoList(props) {

    const [listItems, setListItems] = useState([
        {
            value: 'Aller a la piscine',
            checked: false,
        },
        {
            value: 'Manger une pizza',
            checked: false,
        },
        {
            value: 'Jouer au foot',
            checked: false,
        },
    ])

    const [filteredListItems, setFilteredListItems] = useState([]);
    const [filterValue, setFilterValue] = useState('all');
    const [newTaskValue, setNewTaskValue] = useState('');

    // const filterValue = useReduxblabla

    useEffect(() => {
        setFilteredListItems(listItems);
    }, [filterValue]);

    useEffect(() => {
        setFilter(filterValue);
    }, [listItems]);

    function addTask() {
        if(newTaskValue === '') return;
        setListItems([...listItems, { value: newTaskValue, checked: false }]);
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
                    return <ListItem key={key} item={listItem} markAsCompleted={() => listItem.checked = true} markAsUncompleted={() => listItem.checked = false} />
                })
            }
            <input name="newTask" type="text" onChange={newTaskTextChangedHandler}/>
            <input type="submit" onClick={addTask}/>

            <TodoFilter onFilterUpdateCallback={ setFilter }/>

        </>
    );

}

function ListItem({ item, markAsCompleted, markAsUncompleted }) {

    const [isChecked, setIsChecked] = useState(item.checked);

    function onCheckHandler() {
        if(isChecked) {
            markAsUncompleted();
            setIsChecked(false);
        }
        else {
            markAsCompleted();
            setIsChecked(true);
        }
    }

    return (
        <div style={{textDecorationLine: isChecked ? 'line-through' : 'none' }} onClick={onCheckHandler}>
            <input type="checkbox" onChange={onCheckHandler} name="isChecked" checked={isChecked} />
            { item.value }
        </div>
    );
}

function TodoFilter({ onFilterUpdateCallback }) {

    const [filter, setFilter] = useState('');

    useEffect(() => {
        setFilter('all');
    }, []);

    function onFilterUpdate(_filter) {
        setFilter(_filter);
        onFilterUpdateCallback(_filter);
    }

    return (
        <>
            <div>
                <input type="checkbox" onChange={() => onFilterUpdate('all')} checked={filter === 'all'} name="all" id="all" />
                All
            </div>
            <div>
            <input type="checkbox" onChange={() => onFilterUpdate('done')} checked={filter === 'done'} name="done" id="done" />
                Done
            </div>
            <div>
            <input type="checkbox" onChange={() => onFilterUpdate('undone')} checked={filter === 'undone'} name="undone" id="undone" />
                Undone
            </div>
        </>
    );
    
}