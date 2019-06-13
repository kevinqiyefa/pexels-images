# Pexels Images

> [View Demo](https://pexels-images.web.app/)

## Features
> 1. `Interact with Pexels API` 
> 2. `Custom spelling checker`


## Instructions:

> 1. `Clone the Repo`
> 
> 2. `npm install`
> 
> 3. `npm start`
> 
> 4. `npm test` to run the unit test



## App Structure

### Directories

The app is organized into a few main directories. This is relatively standard. Here's an explanation for each of them:

- `components` - all regular React components go in here in their own folders


### Component Folders

```sh
├── App/  # The root component
├── Backdrop/   # The dark overlay using in SideDrawer and DisplayImages compnents
├── DisplayImages/    # The component displays all the images
├── Home/      # Home page 
├── Toolbar/   # The component that group the logo and all the navigation items 
├── __test__/   # Jest and Enzyme Tests
├── SideDrawer/   # The navigation component for mobile view
├── Logo/       # Used in Toolbar and SideDrawer components
└── NotFoundPage/   # 404 not found component
```


One of the first things you will notice is that everything is basically in its own folder. Every component has a folder, for instance. Here's what goes into a component's folder:

- `index.js` - the main component code here

- `style.css` - CSS styles relating to the component
