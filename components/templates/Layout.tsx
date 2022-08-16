// component
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { ReactNode } from "react";

const Layout = ({ children, hidePt = false }: {
    children: ReactNode
    hidePt?: boolean
}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className={`mb-auto ${hidePt ? '' : 'pt-10'}`}>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout