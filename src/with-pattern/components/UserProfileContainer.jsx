
import axios from "axios";
import { useEffect, useState } from "react";

const UserProfileContainer = ({ userId }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);

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
            const postData = Array.isArray(response.data) ? response.data : [response.data];
            setPosts(postData.filter(Boolean));
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

    
    return (
        <div>UserProfileContainer</div>
    );
}

export default UserProfileContainer;