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