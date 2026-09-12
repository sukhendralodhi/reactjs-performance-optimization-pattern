import AdminPanel from "./AdminPanel";
import ProfilePage from "./ProfilePage";
import ReportsPage from "./ReportsPage";
import WithUserDataAndPermissions from "./WithUserDataAndPermissions";

const UserProfileWithPermission = WithUserDataAndPermissions(ProfilePage, AdminPanel, ReportsPage);

const UserWithHoc = () => {
    return (
        <div>
            <UserProfileWithPermission />
        </div>
    )
}

export default UserWithHoc;