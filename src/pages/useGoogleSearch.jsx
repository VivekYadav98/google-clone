import React, { useState } from "react";
import { useEffect } from "react";
import API_KEY from "../Keys";
const CONTEXT_KEY = "b75ffc9ed913d4f79"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    const baseurl = 'https:www.googleapis.com'

    useEffect(() => {
        const fetchData = async () => {
            fetch(`${baseurl}/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response) => response.json()).then((result) => {
                setData(result);
            })
        }
        fetchData();
    }, [term])

    return { data };
}

export default useGoogleSearch;