import Layout from './Components/HOC/Layout'
import { Switch, Route } from 'react-router-dom'
//  COMPONENT
import Home from './Components/Home'
import SignIn from './Components/Signin'
const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  )
}
export default Routes