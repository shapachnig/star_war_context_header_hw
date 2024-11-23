import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {HeaderContext} from "../App.tsx";


const Header = () => {
    const {header} = useContext(HeaderContext)
    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{header}</h1>
        </header>
    );
};

export default Header;