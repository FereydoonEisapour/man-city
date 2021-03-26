import Layout from './Components/HOC/Layout'
import { Switch } from 'react-router-dom'
//  COMPONENT
import Home from './Components/Home'
import SignIn from './Components/Signin'
import Dashboard from './Components/Admin/Dashboard'
//
import PrivateRoute from './Components/AuthRoutes/PrivateRoutes'
import PublicRoute from './Components/AuthRoutes/PublicRoutes'
const Routes = (props) => {
 // console.log(props);
  return (
    <Layout>
      <Switch>

        <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />

        <PublicRoute {...props} resticted={false} exact component={Home} path="/" />
        <PublicRoute {...props} resticted={true} exact component={SignIn} path="/signin" />

      </Switch>
    </Layout>
  )
}
export default Routes