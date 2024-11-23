import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {createContext, useState} from "react";
import {HeaderContextType} from "./utils/types";

export const HeaderContext = createContext<HeaderContextType>({
    header: 'Luke Skywalker 1',
    setHeader: ()=>{}
})

function App() {
const [header, setHeader] = useState('Luke Skywalker');
    return (
        <>
            <HeaderContext.Provider value={{header, setHeader}}>
                <Header/>
                <Main/>
            </HeaderContext.Provider>
            <Footer/>
        </>
    )
}

export default App