import { CityLogo } from '../Ui/Icon';
const Footer = () => {
    return (
        <footer className=" bck_blue">
            <div className="footer_logo">
                <CityLogo
                    link={true}
                    linkTo="/"
                    width="4.375rem"
                    height="4.375rem"
                />
            </div>
            <div className=" footer_discl">
                Manchester city 2021.All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
