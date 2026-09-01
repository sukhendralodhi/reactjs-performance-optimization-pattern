import { useMemo } from "react";

type usersPeops = {
    list: string[];
}

function Users({ list }: usersPeops) {
    console.log("User component rerendred!");
    // const sorted = list.sort((a, b) => a.localeCompare(b));
    // console.log(sorted)

    const sorted = useMemo(() => {
        console.log("Expensive list...")
        return [...list].sort((a, b) => a.localeCompare(b));
    }, [list])

    return (
        <>
            <h2>Sorted users:</h2>
            {
                sorted.map((user, index) => {
                    return <div key={index}>{user}</div>
                })
            }
        </>
    )
}

export default Users;