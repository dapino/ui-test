import { useState, useEffect } from 'react';

const useFetchData = API => {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    return items;
}

export default useFetchData;
