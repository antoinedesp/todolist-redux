import React from "react";
import {setFilter} from "./slices/todoFilterSlice.jsx";
import {useDispatch, useSelector} from "react-redux";

export default function TodoFilter() {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.todoFilter.value);

    function onFilterUpdate(_filter) {
        dispatch(setFilter(_filter));
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