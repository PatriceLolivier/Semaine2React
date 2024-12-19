import { Link } from 'react-router-dom'

const NavBarRedirection = ({ children }) => {
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div className="flex items-center py-4">
                            <span className="text-white text-xl font-bold">MovieApp</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export const NavLink = ({ to, children }) => {
    return (
        <Link 
            to={to} 
            className="py-4 px-2 text-white hover:text-gray-300 transition duration-300"
        >
            {children}
        </Link>
    )
}

export default NavBarRedirection 