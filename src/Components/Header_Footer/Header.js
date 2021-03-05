import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'
import {CityLogo} from '../Ui/Icon';

function Header() {
    return (
        <AppBar
            positon="fixed"
            style={{
                backgroundColor: "#98c5e9",
                boxShadow: 'none',
                padding: '10px 0',
                borderBottom: '2px solid #00258e'
            }}
        >
            <ToolBar
                style={{ display: 'flex' }}
            >
                <div style={{ flexGrow: 1 }}>
                    <div className="header_logo">
                        <CityLogo
                            link={true}
                            linkTo="/"
                            width="4.375rem"
                            height="4.375rem"
                        />
                    </div>
                </div>
                <Link to="/the_team">
                    <Button color="inherit" >The Team </Button>
                </Link>
                <Link to="/the_matches">
                    <Button color="inherit" >Matches</Button>
                </Link>
            </ToolBar>
        </AppBar>
    )
}
export default Header