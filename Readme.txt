Note to self:
I think after the problems that I faced in setting alerts for this project,
it is very important that you have a uniform method of conveying messages
from the backend API. That make setting alerts such a breeze.

-- Login page: if user is already authenticted, don't show login. Redirect to Home page '/'.

-- Register page: if user is already authenticted, don't show register. Redirect to Home page '/'.

-- mapStateToProps is an arrow function and needs to return part of state to be provided as props to component

-- Event Handlers in React using Example:
{/* <input type="text" onChange={handleChange} /> */}
/* The handleChange function is an event handler.
The event that the handler receives as a parameter is an object that contains a target field.
This target is the DOM element that the event handler is bound to(here, the text input field).
By accessing this field, we can determine what the target's value is changed to.
function handleChange(e) {
    console.log("new value", e.target.value);
} */

-- For deployment to Heroku:
Created account, downloaded & installed heroku cli
In server.js, added code block under "// Serve static assets in production"
In config folder, created file "production.json" for production use. 
In package.json, added script "heroku-postbuild" to build folder on heroku, after it is deployed.
Go to home folder outside client, run heroku commands:
heroku create, added remote.

-- Basic funda for this application:
We are using JWT to authenticate users/tokens and get login info from token.
Inside the token, we are sending user id as payload.
Protected routes use the 'auth' middleware that we created to authenticate users/token.
In 'auth' middleware we extract token payload and pass/set user info with/into req.user object.    
So all protected routes have this information going forward.
It can be accessed by 'req.user' 

-- Applicatin workflow:
Register user. This also returns a token. So basically user gets logged in automatically on registrtion.
Login user. We get user info like user id from token.
Create/Update/Delet contact. Protected routes. 'auth' middleware is used. Token is required. Get user info from token payload.
So automatically creator id is obtained from token so create/update/delete methods are applicable for that creator id only.
This is how the application is so simple. It is designed to work this way. 

-- jsonwebtoken to manage JWT

-- config folder
using config package from npm to manage global variables.
created default.json to create and use global variables for mongodb. 
the value of these global objects will be available throughout the project.

-- express-validator
using this package from npm to validate input on arrival at each end-point
e.g. if 'name' is required in mongoose model, input (form/via postman) must have 'name'

-- axios used as http client for this project. Axios related links I referenced-
To see how to catch response with status code other than 2xx, 
https://github.com/axios/axios#handling-errors
https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests

-- setAuthToken questions
Q) Why do we only set the token in App.js and not the loadUser?
Ans) Because when App.js first loads and there is no user data, we don't want to see 401 unauthorized.
With loadUser, we need token to get data. Therefore, just quietly check for token in App.js.
 
setAuthToken is used once in App.js and inside loadUser() in AuthState.
loadUser() is used in register(), login(), useEffect of Contacts component. 

If you only used the setAuthToken function in the App.js, it will only check for the token
on the initial loading of the application. If user is not loaded/logged in/just registered, there
will be no token and 'x-auth-token' header will be removed.

We call setAuthToken in loadUser, and loadUser is called on registration. loadUser is also called 
when Contacts component loads. So, when a user registers or home page reloads: reloading the contacts, 
loadUser is run and token is sent for all subsequesnt axios calls. 

-- Protected routes
HomePage got protected against unauthorized viewing by using PrivateRoute.js 
