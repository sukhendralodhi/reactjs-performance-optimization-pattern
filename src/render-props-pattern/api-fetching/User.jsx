import DataFetcher from "./DataFetcher";

const User = () => {
    return (
        <DataFetcher
            url="https://jsonplaceholder.typicode.com/users"
            render={({ data, loading, error }) => {
                if (loading) {
                    return <h2>Loading...</h2>;
                }

                if (error) {
                    return <h2>Error: {error}</h2>;
                }

                return (
                    <div>
                        <h1>Users</h1>

                        {data?.map((user) => (
                            <div key={user.id}>
                                {user.name}
                            </div>
                        ))}
                    </div>
                );
            }}
        >


        </DataFetcher>
    )
}

export default User