import { useState } from "react"

function Accordian({ children }) {
    return <div className="accordion">{children}</div>
}

const AccordianItem = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>{title}</button>

            {
                isOpen && <div className="accordion-content">This is accordian</div>
            }
        </div>
    )
}

Accordian.Item = AccordianItem;

export default Accordian;