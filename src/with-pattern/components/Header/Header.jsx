import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
                >
                    MyLogo
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        to="/"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        Products
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        /* Close Icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        /* Hamburger Icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
                    <div className="flex flex-col gap-2">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
                        >
                            Home
                        </Link>

                        <Link
                            to="/products"
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Products
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;