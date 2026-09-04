
const UncontrolledForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // const name = formData.get("name");
        // const email = formData.get("email");
        // const message = formData.get("message");
        const data = Object.fromEntries(formData.entries());

        if (!data.name) {
            alert("Enter your name");
            return;
        }
        if (!data.email.includes("@")) {
            alert("Enter your email")
            return;
        }
        if (!data.message) {
            alert("Enter your message");
            return;
        }

        console.log("Form submitted: ", data);
    }

    return (
        <div className="flex justify-center items-center h-screen flex-col gap-8">
            <form className="flex flex-col gap-4" action="" onSubmit={handleSubmit}>
                <input
                    className="border px-4 rounded py-2"
                    type="text"
                    name="name"
                    placeholder="Enter name..."
                />
                <input
                    className="border px-4 rounded py-2"
                    type="text"
                    name="email"
                    placeholder="Enter your email..."

                />
                <textarea
                    className="border px-4 rounded py-2"
                    name="message"
                    id="message"
                    placeholder="Enter your message..."
                ></textarea>
                <button className="bg-gray-700 text-white rounded px-4 py-1" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledForm;