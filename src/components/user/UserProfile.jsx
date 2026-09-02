import axios from "axios";
import { useEffect, useState } from "react";

const demoPosts = [
    {
        id: "1",
        userId: "1",
        title: "Understanding React Hooks: A Deep Dive",
        content: "React Hooks have revolutionized the way we write React components. In this comprehensive guide, we'll explore the most commonly used hooks and learn how to create custom hooks for reusable logic. We'll start with useState and useEffect, then move on to more advanced hooks like useReducer, useContext, and useCallback. By the end of this article, you'll have a solid understanding of when and how to use each hook effectively in your React applications.",
        excerpt: "A comprehensive guide to React Hooks, from basics to advanced patterns.",
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-15T10:30:00Z",
        likes: 45,
        comments: 12,
        tags: ["react", "hooks", "javascript", "frontend"],
        published: true,
        readTime: "8 min read"
    },
    {
        id: "2",
        userId: "1",
        title: "Building Scalable React Applications",
        content: "As React applications grow in complexity, maintaining clean and scalable code becomes crucial. This article covers architectural patterns, state management strategies, and best practices for organizing large React codebases. We'll discuss component composition, the container-presenter pattern, custom hooks, and how to structure your project for long-term maintainability.",
        excerpt: "Learn how to architect React applications that scale with your team and requirements.",
        createdAt: "2024-01-08T14:22:00Z",
        updatedAt: "2024-01-08T14:22:00Z",
        likes: 78,
        comments: 23,
        tags: ["react", "architecture", "scalability", "best-practices"],
        published: true,
        readTime: "12 min read"
    },
    {
        id: "3",
        userId: "1",
        title: "TypeScript with React: Getting Started",
        content: "TypeScript brings type safety to React development, helping catch errors early and improving developer experience. This beginner-friendly guide covers setting up TypeScript in a React project, typing components, props, and state, and common patterns you'll use in everyday development.",
        excerpt: "A beginner's guide to using TypeScript with React for better developer experience.",
        createdAt: "2023-12-28T16:45:00Z",
        updatedAt: "2023-12-28T16:45:00Z",
        likes: 34,
        comments: 8,
        tags: ["typescript", "react", "javascript", "types"],
        published: true,
        readTime: "6 min read"
    }
];

const UserProfile = ({ userId }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});

    console.log(user)

    const fetchUserData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`);
            console.log(response.data);
            setUser(response.data);
            setFormData(
                {
                    name: response.data.name,
                    email: response.data.email,
                    bio: response.data.bio,
                }
            );
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const fetchPostsData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}/posts`);
            console.log(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/users/${userId}`, formData);
            console.log(response.data);
            setUser(response.data);
            setIsEditing(false);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserData();
        fetchPostsData();
    }, [userId]);

    if (loading) {
        return (
            <div className="flex min-h-60 items-center justify-center bg-slate-100 px-4">
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-sm">
                    Loading...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-60 items-center justify-center bg-slate-100 px-4">
                <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm font-medium text-red-600 shadow-sm">
                    Error: {error.message}
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex min-h-60 items-center justify-center bg-slate-100 px-4">
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-sm">
                    No user data available.
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_1.45fr]">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
                    <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 px-6 py-8 text-white sm:px-8">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white/10 shadow-inner ring-1 ring-white/20">
                                <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Profile</p>
                                <h1 className="mt-1 text-2xl font-semibold text-white">{user.name}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8">
                        {isEditing ? (
                            <form className="space-y-5" onSubmit={handleFormSubmit}>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">Bio</label>
                                    <textarea
                                        value={formData.bio}
                                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                        rows="4"
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                                    />
                                </div>

                                <div className="flex items-center justify-end gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-6">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
                                    <p className="mt-2 text-base font-medium text-slate-800">{user.email}</p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Bio</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-700">{user.bio}</p>
                                </div>

                                <div className="flex justify-end pt-2">
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-600"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Articles</p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-900">Posts</h2>
                        </div>
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{demoPosts.length} posts</span>
                    </div>

                    <div className="space-y-4">
                        {demoPosts.map((post) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;