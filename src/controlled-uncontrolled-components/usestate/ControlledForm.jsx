
import { useRef, useState } from "react";

const ControlledForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name) {
            nameRef.current.focus();
            return;
        }
        if (!form.email.includes("@")) {
            emailRef.current.focus();
            return;
        }
        if (!form.message) {
            messageRef.current.focus();
            return;
        }

        console.log("Form submitted: ", form);
        setForm({
            name: "",
            email: "",
            message: ""
        });
    }

    return (
        <div className="flex justify-center items-center h-screen flex-col gap-8">
            <form className="flex flex-col gap-4" action="" onSubmit={handleSubmit}>
                <input
                    className="border px-4 rounded py-2"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                    ref={nameRef}
                    placeholder="Enter name..."
                />
                <input
                    className="border px-4 rounded py-2"
                    type="text"
                    name="email"
                    value={form.email}
                    ref={emailRef}
                    placeholder="Enter your email..."
                    onChange={handleChange}
                />
                <textarea
                    className="border px-4 rounded py-2"
                    name="message"
                    id="message"
                    value={form.message}
                    ref={messageRef}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                ></textarea>
                <button className="bg-gray-700 text-white rounded px-4 py-1" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ControlledForm