import Footer from "../Header_Footer/Footer"
import Header from "../Header_Footer/Header"


const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )

}
export default Layout