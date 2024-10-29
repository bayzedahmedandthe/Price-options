import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    const data = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" }
    ];
    return (
        <nav className="pt-12">

            <div onClick={handleClick} className="md:hidden text-2xl pb-4">
                {
                    open === true ? <MdClose></MdClose> : <AiOutlineBars></AiOutlineBars>
                }
                
            </div>

            
                <ul className={`md:flex absolute duration-1000   md:static ${open ? "top-20" : "-top-60"}`}>
                    {
                        data.map(d => <li className="hover:bg-gray-300 px-4 py-1 rounded-lg" key={d.id}><a href={d.path}>{d.name}</a></li>)
                    }
                </ul>

                
           

        </nav>
    );
};

export default NavBar;