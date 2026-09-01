import { useState } from "react";
import { getUsers } from "../utils/utils";
import Users from "./Users";


const UsersSortingDemo = () => {
    const [count, setCount] = useState(0);
    const [users] = useState(() => getUsers());

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount((c) => c + 1)} > Increament</button >
            <Users list={users} />
        </>
    )
}

export default UsersSortingDemo;