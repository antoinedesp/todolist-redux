import React, {useEffect, useState} from "react";

export default function TodoFilter({ onFilterUpdateCallback }) {

    const [filter, setFilter] = useState('');

    useEffect(() => {
        setFilter('all');
    }, []);

    function onFilterUpdate(_filter) {
        setFilter(_filter);
        // @TODO: set state todo filter state instead of
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