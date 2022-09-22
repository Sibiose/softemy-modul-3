import { useParams } from "react-router-dom"

export const UserPage = () => {
    let params = useParams();
    return <>
        <h1>User Information {params.userId}</h1></>
}