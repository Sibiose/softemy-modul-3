import { Link, useSearchParams } from "react-router-dom"

export const HomePage = () => {

    let [params] = useSearchParams();
    const msg = params.get('msg');
    return <>
        <h1>Welcome {msg}</h1>

        <Link to={'user/ceva'}>Ceva </Link>
        <br />
        <Link to={'user/1'}>User 1</Link><br />
        <Link to={'/?msg=DinLink'}> Home Din Link</Link><br />
    </>
}