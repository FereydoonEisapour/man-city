import Layout from './Components/HOC/Layout'
import { Switch, Route } from 'react-router-dom'
//  COMPONENT
import Home from './Components/Home'
import SignIn from './Components/Signin'
import Dashboard from './Components/Admin/Dashboard'
const Routes = (props) => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <Route exact component={Dashboard} path="/dashboard" />
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  )
}
export default Routes