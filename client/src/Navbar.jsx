import Dropdown from "./dropdown";

const Navbar = ({setLanguage}) =>{
    return(
        <div className="w-full flex flex-row justify-between">
            <nav className="p-5">
                <li className="text-color-red-300 m-5">Code Editor</li>
                <li><Dropdown onLanguage = {language => setLanguage(language)}/></li>
            </nav>
        </div>
    );
}

export default Navbar;