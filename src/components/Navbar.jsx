import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const nav = [
        {name: "Shop", link: "/shop"}, 
        {name: "Cart", link: "/cart"}
    ];

    return (
        <div className="navbar">
            <header>
                <Link to="/" className="company-name">E-commerce</Link>
                <div className="navigations">
                    <div className="nav-container">
                        {nav.map((item, index) => (
                            <Link 
                                key={item.name} 
                                to={item.link}
                                onClick={() => setSelectedIndex(index)} 
                                className={selectedIndex === index ? "navigation active" : "navigation"}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
