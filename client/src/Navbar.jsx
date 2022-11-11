import DropdownRender from "./dropdown";

const Navbar = () =>{
    return(
        <div className="w-full flex flex-row justify-between">
            <nav className="p-5">
                <li className="text-color-red-300 m-5">Code Editor</li>
                <li><DropdownRender/></li>
            </nav>
        </div>
    );
}

export default Navbar;