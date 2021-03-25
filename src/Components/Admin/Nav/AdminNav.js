import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../Firebase'
const AdminNav = (props) => {

    const links = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },
        {
            title: 'Add Match',
            linkTo: '/admin_matches/edit_match'
        },
        {
            title: 'Players',
            linkTo: '/admin_players'
        },
        {
            title: 'Add Players',
            linkTo: '/admin_players/add_players'
        }
    ]
    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom: '1px solid #353535'
    }


    const renderItems = () => (
        links.map((link, i) => (
            <Link to={link.linkTo} key={i}>
                <ListItem button style={style} >
                    {link.title}
                </ListItem>
            </Link>
        ))
    )
    const logOutHandler = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log('Log out');
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            {renderItems()}
            <ListItem button onClick={logOutHandler} style={style}>
                Log out
            </ListItem>
        </div>
    );
};

export default AdminNav;