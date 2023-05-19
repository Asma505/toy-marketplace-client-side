import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Sports Toys`;
    }, [title])
}

export default useTitle;