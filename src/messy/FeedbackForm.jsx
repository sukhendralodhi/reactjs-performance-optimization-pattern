import { useRef, useState } from "react";

const FeedbackForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const messageRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Enter your name");
        }
        if (!email.includes("@")) {
            alert("Enter your email")
        }

        if (!messageRef.current.value) {
            messageRef.current.focus();
            return;
        }

        console.log("Form submitted: ", {
            name,
            email,
            message: messageRef.current.value
        });
    }

    return (
        <div className="flex justify-center items-center h-screen flex-col gap-8">
            <form className="flex flex-col gap-4" action="" onSubmit={handleSubmit}>
                <input
                    className="border px-4 rounded py-2"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    placeholder="Enter name..."
                />
                <input
                    className="border px-4 rounded py-2"
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea className="border px-4 rounded py-2" name="message" id="message" ref={messageRef} placeholder="Enter your message..."></textarea>
                <button className="bg-gray-700 text-white rounded px-4 py-1" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FeedbackForm;