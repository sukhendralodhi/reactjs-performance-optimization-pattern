import DataFetcher from './DataFetcher'

const Post = () => {
    return (
        <DataFetcher
            url="https://jsonplaceholder.typicode.com/posts"
            render={({ data, loading, error }) => {
                if (loading) {
                    return
                }
                if (error) {
                    return
                }

                return (
                    <div>
                        {
                            data.map((d) => (
                                <div key={d.id}>
                                    {d.title}
                                </div>
                            ))
                        }
                    </div>
                )
            }}
        >


        </DataFetcher>
    )
}

export default Post