import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { markTodoAsDone, markToDoAsUndone, removeTodo } from "./slices/todoSlice.jsx";

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

    function hasPassedDeadline() {
        if(item.date == null) {
            return false;
        }
        if(Date.now() >= new Date(item.date)) {
            return true;
        }
    }

    return (
        <div style={{textDecorationLine: item.checked === true ? 'line-through' : 'none' }} className={"flex items-center justify-start font-semibold text-slate-500 w-full py-4 px-8 border-2 rounded transition hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-600 focus:text-slate-600 hover:border-slate-400 focus:border-slate-400" + (item.checked ? " bg-slate-200 opacity-75 " : "") + (hasPassedDeadline() ? " bg-red-200 " : "")} onClick={onCheckHandler}>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <input type="checkbox"
                           className="mr-2 py-2 px-2 transition appearance-none border-2 border-slate-200 rounded text-gray-700 leading-tight focus:outline-none focus:border-slate-500 hover:border-slate-400 checked:bg-slate-500"
                           onChange={onCheckHandler} name="isChecked" checked={item.checked === true}/>
                    {item.value}
                </div>
                <div className="text-xs text-slate-400">
                    {item.date != null ? `Deadline: ${item.date}` : ""}
                </div>
            </div>
            <button
                className="flex text-xs items-center justify-center font-semibold text-slate-300 w-8 h-8 py-2 px-2 border rounded-full transition hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-600 focus:text-slate-600 hover:border-slate-400 focus:border-slate-400" onClick={() => dispatch(removeTodo(item.value))}>
                x
            </button>
        </div>
    );
}