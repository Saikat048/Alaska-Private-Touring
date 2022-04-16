import { useEffect, useState } from "react"


const useCustomHook = () => {
    const [place, setPlace] = useState([]) 
    useEffect( () => {
        fetch('fake-data.json')
        .then(res => res.json())
        .then(data => setPlace(data))
    }, []);

    return [place, setPlace]
}

export default useCustomHook;