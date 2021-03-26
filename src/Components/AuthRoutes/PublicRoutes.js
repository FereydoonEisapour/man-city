import { Route, Redirect } from 'react-router-dom'

const PublicRoutes = ({
    user,
    component: Comp,
    ...rest
}
) => {
    return <Route {...rest} component={(props) => (
        rest.resticted ?  // Sign in
            (
                user ?
                    <Redirect to="/dashboard" user={user}/>
                    :
                    <Comp {...props} user={user} />
            )
            :
            <Comp {...props} user={user} />  // Home
    )} />
}

export default PublicRoutes;