
const ProfilePage = ({ userData }) => {
    return (
        <div className="border flex flex-col justify-center items-center bg-gray-200 p-4">
            <h2 className="text-xl text-blue-600">User profile</h2>
            {userData.name}
            <p>{userData.role}</p>
        </div>
    )
}

export default ProfilePage