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
            <div onClick={() => onFilterUpdate('all')} className={"text-sm flex items-center justify-start font-semibold text-slate-500 w-full py-4 px-8 border-2 rounded transition hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-600 focus:text-slate-600 hover:border-slate-400 focus:border-slate-400" + (filter === 'all' ? " border-slate-500 bg-slate-300" : "")}>
                <input className="mr-2 py-2 px-2 transition appearance-none border-2 border-slate-200 rounded text-gray-700 leading-tight focus:outline-none focus:border-slate-500 hover:border-slate-400 checked:bg-slate-500  " type="checkbox" onChange={() => onFilterUpdate('all')} checked={filter === 'all'} name="all" id="all" />
                Show all tasks
            </div>
            <div onClick={() => onFilterUpdate('done')} className={"text-sm flex items-center justify-start font-semibold text-slate-500 w-full py-4 px-8 border-2 rounded transition hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-600 focus:text-slate-600 hover:border-slate-400 focus:border-slate-400" + (filter === 'done' ? " border-slate-500 bg-slate-300" : "")}>
                <input className="mr-2 py-2 px-2 transition appearance-none border-2 border-slate-200 rounded text-gray-700 leading-tight focus:outline-none focus:border-slate-500 hover:border-slate-400 checked:bg-slate-500  " type="checkbox" onChange={() => onFilterUpdate('done')} checked={filter === 'done'} name="done" id="done" />
                Show only done tasks
            </div>
            <div onClick={() => onFilterUpdate('undone')} className={"text-sm flex items-center justify-start font-semibold text-slate-500 w-full py-4 px-8 border-2 rounded transition hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-600 focus:text-slate-600 hover:border-slate-400 focus:border-slate-400 " + (filter === 'undone' ? " border-slate-500 bg-slate-300" : "")}>
                <input className="mr-2 py-2 px-2 transition appearance-none border-2 border-slate-200 rounded text-gray-700 leading-tight focus:outline-none focus:border-slate-500 hover:border-slate-400 checked:bg-slate-500 " type="checkbox" onChange={() => onFilterUpdate('undone')} checked={filter === 'undone'} name="undone" id="undone" />
                Show only not done tasks
            </div>
        </>
    );
}