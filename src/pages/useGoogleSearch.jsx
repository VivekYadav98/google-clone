import React, { useState } from "react";
import { useEffect } from "react";
import API_KEY from "../Keys";
const CONTEXT_KEY = "b75ffc9ed913d4f79"
import { BASE_URL } from "./url";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`${BASE_URL}/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response) => response.json()).then((result) => {
                setData(result);
            })
        }
        fetchData();
    }, [term])

    return { data };
}

export default useGoogleSearch;