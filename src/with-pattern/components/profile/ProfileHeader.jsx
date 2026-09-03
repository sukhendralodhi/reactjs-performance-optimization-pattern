
const ProfileHeader = ({
    user,
    isEditing,
    formData,
    onStartEdit,
    onInputChange,
    onCancelEdit,
    onSaveProfile
}) => {


    return (
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
                    <form className="space-y-5" onSubmit={onSaveProfile}>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={onInputChange}
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={onInputChange}
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Bio</label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={onInputChange}
                                rows="4"
                                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                            />
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onCancelEdit}
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
                                onClick={onStartEdit}
                                className="rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-600"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileHeader