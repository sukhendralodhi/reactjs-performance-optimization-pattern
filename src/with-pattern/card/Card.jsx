const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`
                w-full max-w-md
                overflow-hidden
                rounded-2xl
                border border-gray-200
                bg-white
                shadow-sm
                transition-shadow
                hover:shadow-md
                ${className}
            `}
        >
            {children}
        </div>
    );
};

function CardHeader({ children }) {
    return (
        <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
            {children}
        </div>
    );
}

function CardBody({ children }) {
    return (
        <div className="px-6 py-5">
            {children}
        </div>
    );
}

function CardFooter({ children }) {
    return (
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
            {children}
        </div>
    );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;