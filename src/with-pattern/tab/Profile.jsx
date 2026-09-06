import Tabs from "./Tabs"

const Profile = () => {
    return (
        <Tabs defaultTab="profile">
            <Tabs.List>
                <Tabs.Tab value="profile">
                    Profile
                </Tabs.Tab>

                <Tabs.Tab value="settings">
                    Settings
                </Tabs.Tab>

                <Tabs.Tab value="security">
                    Security
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="profile">
                <h2 className="text-xl font-semibold">
                    Profile
                </h2>

                <p className="mt-2 text-gray-600">
                    Manage your profile information.
                </p>
            </Tabs.Panel>

            <Tabs.Panel value="settings">
                <h2 className="text-xl font-semibold">
                    Settings
                </h2>

                <p className="mt-2 text-gray-600">
                    Change your application settings.
                </p>
            </Tabs.Panel>

            <Tabs.Panel value="security">
                <h2 className="text-xl font-semibold">
                    Security
                </h2>

                <p className="mt-2 text-gray-600">
                    Manage your password and security settings.
                </p>
            </Tabs.Panel>
        </Tabs>
    )
}

export default Profile