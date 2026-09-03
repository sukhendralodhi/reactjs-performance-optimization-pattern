import Post from "./Post"

const PostList = ({ posts }) => {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Articles</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">Posts</h2>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{posts.length} posts</span>
            </div>

            <div className="space-y-4">
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PostList