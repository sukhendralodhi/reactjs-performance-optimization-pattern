

const Post = ({ post }) => {
    return (
        <article
            key={post.id}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                    {post.readTime}
                </span>
                <span className="text-xs font-medium text-slate-500">{post.published ? "Published" : "Draft"}</span>
            </div>

            <h3 className="text-xl font-semibold leading-snug text-slate-900">{post.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
            </div>
        </article>
    );
}

export default Post;