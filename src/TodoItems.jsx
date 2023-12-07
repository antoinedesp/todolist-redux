import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { markTodoAsDone, markToDoAsUndone} from "./slices/todoSlice.jsx";

export default function TodoItems({item}) {

    const dispatch = useDispatch();
    function onCheckHandler() {
        if(item.checked === true) {
            dispatch(markToDoAsUndone(item.value));
        }
        else {
            dispatch(markTodoAsDone(item.value));
        }
    }

    return (
        <div style={{textDecorationLine: item.checked === true ? 'line-through' : 'none' }} onClick={onCheckHandler}>
            <input type="checkbox" onChange={onCheckHandler} name="isChecked" checked={item.checked === true} />
            { item.value }
        </div>
    );
}