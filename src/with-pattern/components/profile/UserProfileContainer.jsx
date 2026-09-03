
import axios from "axios";
import { useEffect, useState } from "react";
import UserProfilePresenter from "./UserProfilePresenter";

const UserProfileContainer = ({ userId }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);

    const fetchUserData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`);
            // console.log(response.data);
            setUser(response.data);
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
            // console.log(response.data);
            const postData = Array.isArray(response.data) ? response.data : [response.data];
            setPosts(postData.filter(Boolean));
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const handleUpdateUser = async (updatedUserData) => {
        try {
            setLoading(true);
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/users/${userId}`, updatedUserData);
            // console.log(response.data);
            setUser(response.data);
            return { success: true };
        } catch (error) {
            setError(error);
            return { success: false };
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchUserData();
        fetchPostsData();
    }, [userId]);

    const handleRetry = () => {
        fetchUserData();
        fetchPostsData();
    }

    // console.log(user);
    // console.log(posts);


    return (
        <>
            <UserProfilePresenter
                user={user}
                posts={posts}
                loading={loading}
                error={error}
                onRetry={handleRetry}
                onUpdateUser={handleUpdateUser}
            />
        </>
    );
}

export default UserProfileContainer;