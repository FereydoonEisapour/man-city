import Layout from './Components/HOC/Layout'
import { Switch } from 'react-router-dom'
//  COMPONENT
import Home from './Components/Home'
import SignIn from './Components/Signin'
import Dashboard from './Components/Admin/Dashboard'
//Admin Match
import AdminMatches from './Components/Admin/Matches'
import AddEditMatch from './Components/Admin/Matches/AddEditMatch'
// Admin Player
import AdminPlayers from './Components/Admin/Players'

//
import PrivateRoute from './Components/AuthRoutes/PrivateRoutes'
import PublicRoute from './Components/AuthRoutes/PublicRoutes'

const Routes = (props) => {
  // console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} exact component={AdminPlayers} path="/admin_players/edit_player/:id"  />
        <PrivateRoute {...props} exact component={AdminPlayers} path="/admin_players"  />
        <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match" />
        <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match/:id" />
        <PrivateRoute {...props} exact component={AdminMatches} path="/admin_matches" />
        <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />

        <PublicRoute {...props} resticted={false} exact component={Home} path="/" />
        <PublicRoute {...props} resticted={true} exact component={SignIn} path="/signin" />

      </Switch>
    </Layout>
  )
}
export default Routes