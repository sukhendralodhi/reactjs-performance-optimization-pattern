import { useState } from "react";

const WithUserDataAndPermissions = (
    ProfilePage,
    AdminPanel,
    ReportsPage
) => {

    return function WithUserData(props) {
        const [userData, setUserData] = useState({ name: "Sukhendra", role: "admin" });
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);


        // useEffect(() => {
        //     async function fetchUserData() {
        //         try {
        //             setLoading(true);
        //             const response = await fetch("http://localhost:3001/api/user");
        //             if (!response.ok) {
        //                 throw new Error("Failed to fetch user data");
        //             }
        //             const result = await response.json();
        //             setUserData(result);
        //         } catch (error) {
        //             setError(error?.message || "Something went wrong");
        //         } finally {
        //             setLoading(false);
        //         }
        //     }
        //     fetchUserData();
        // }, []);

        // Loading State
        // if (loading) {
        //     return (
        //         <div className="flex items-center justify-center p-6 text-slate-600 dark:text-slate-400">
        //             <svg className="mr-3 h-5 w-5 animate-spin text-indigo-600" viewBox="0 0 24 24" fill="none">
        //                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        //                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        //             </svg>
        //             <span className="font-medium">Loading user data...</span>
        //         </div>
        //     );
        // }

        // Error State
        // if (error) {
        //     return (
        //         <div className="my-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow-sm dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-400" role="alert">
        //             <div className="flex items-center gap-2">
        //                 <svg className="h-5 w-5 shrink-0 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        //                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
        //                 </svg>
        //                 <span className="font-semibold">Error:</span>
        //                 <span>{error}</span>
        //             </div>
        //         </div>
        //     );
        // }


        return (
            <>
                <ProfilePage userData={userData} {...props} />

                {
                    userData.role === "admin" && (
                        <AdminPanel userData={userData} {...props} />
                    )
                }

                {userData.role === "user" && (
                    <ReportsPage userData={userData} {...props} />
                )}
            </>
        )

    };
}

export default WithUserDataAndPermissions;