import React from "react";

import "./globals.css";

export const metadata = {
    title: "Wishify",
    
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-gray-50 text-gray-900">
                {/* Navbar */}
                <nav className="bg-orange-900 text-white py-4">
                    <div className="container mx-auto flex justify-between items-center px-6">
                             {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src="/image/logo.png" 
                                alt="Wishify"
                                width={50} 
                                height={50} 
                                className="rounded-md" 
                            />
                             <span className="text-1xl font-bold ml-3">Wishify</span>
                        </div>
                        
                        <ul className="flex space-x-6">
                            <li>
                                <a href="/" className="hover:text-purple-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-orange-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/cosmetics" className="hover:text-orange-300">
                                    Cosmetics
                                </a>
                            </li>
                            <li>
                                <a href="/perfume" className="hover:text-orange-300">
                                    Perfume
                                </a>
                            </li>
                            <li>
                                <a href="/buy now" className="hover:text-orange-300">
                                    Buy Now
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6">{children}</main>

                {/* Footer */}
                <footer className="bg-orange-900 text-white py-4">
                    <div className="container mx-auto text-center">
                        <p>© 2024 Wishify. All rights reserved.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
