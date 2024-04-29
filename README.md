# React App process at start -
- Create react app command.
- Installed Tailwind for css and configured tailwind.config.js file which created on installing tailwind .
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deployment using firebase to production-https://netflixgpt-c8512.web.app/
- Create Sign up User account
- Implement Sign In user api
- Created redux store with userSlice.
- Implemented Sign out
- Update profile
- Bugfix- Sign up user displayName and profilepicture update
- Bugfix- Redirect to login page whenever user only tries to access /browser
- Unsubscribed to the onAuthStateChanged callback in header useEffect function.
- Add hardcoded values to constant files
- Registered TMDB api and create an app & get access token.
- Get data from tmdb api 
- Custom hooks for Now playing movies
- Update store with movie data.
- Planning for main and secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded Youtube video with key id
- Tailwind classes to design main container.




# Features -
- Login/Sign Up
  - Sign In/Sign Up Form
  - Redirect to Browse page
- Browser (After Authentication)
   -  Header
   - Main Movie
     - Trailer in Background
     - Title  & description
     - Movie Suggestions 
       - Movie List 
- Netflix gpt
  - Search Bar
  - Movie Suggestions

# For Deployment,we used Firebase
- Steps for deployment - 
  - Install firebase CLI - 'npm install -g firebase-tools'
  - Firebase Login - ' firebase login'
  - Initialize firebase - 'firebase init' ,then select hosting
  - Deploy command - first do 'npm run build' , once it creates dist folder,run - 'firebase deploy'