import { useState } from "react";
import ErrorComponent from "../../common-components/ErrorComponent";
import LoadingSpinner from "../../common-components/LoadingSpinner";
import PostList from "../post/PostList";
import ProfileHeader from "./ProfileHeader";


const UserProfilePresenter = (
    {
        user,
        posts,
        loading,
        error,
        onRetry,
        onUpdateUser
    }
) => {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSaveProfile = async (event) => {
        event.preventDefault();
        const result = await onUpdateUser(formData);
        if (result.success) {
            setIsEditing(false);
        }
    }

    const handleStartEdit = () => {
        setFormData({
            name: user.name,
            email: user.email,
            bio: user.bio
        });
        setIsEditing(true);
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                bio: user.bio
            });
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    if (loading) {
        return (
            <LoadingSpinner message="Loading user profile..." />
        );
    }


    if (error) {
        return (
            <ErrorComponent
                title="Oops! Something went wrong"
                errorMessage={error.message}
                onRetry={onRetry}
            />
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
                <ProfileHeader
                    user={user}
                    isEditing={isEditing}
                    formData={formData}
                    onStartEdit={handleStartEdit}
                    onInputChange={handleInputChange}
                    onCancelEdit={handleCancelEdit}
                    onSaveProfile={handleSaveProfile}
                />
                <PostList posts={posts} />
            </div>
        </div>
    );
}

export default UserProfilePresenter;