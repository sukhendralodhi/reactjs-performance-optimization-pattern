
const AdminPanel = ({ userData }) => {
    return (
        <div className="border flex flex-col justify-center items-center bg-gray-200 p-4">
            <h1 className="text-xl text-blue-700">Admin Panel</h1>
            {userData.name}
            <p>{userData.role}</p>
        </div>
    )
}

export default AdminPanel