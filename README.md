<div>
<a href=""><img src="https://github.com/frozzel/Cyrus-Group-VR/blob/afbdd9790cabc618f836b62feb62f793ad3db6fe/src/images/cyrusLogo.webp" align="center" height="" width="60%" ></a></div>


# Cyrus Group Innovations

Welcome to Cyrus Group, where creativity and innovation come together. Experience the power of cutting-edge web development solutions as we strive to exceed your expectations.

---

![Screen Shots](https://github.com/frozzel/cgi-pro-painters/blob/16c71319c5d5fb890c1149a39f0759a7a25fef34/src/images/Screenshot1.png)
![Screen Shots2](https://github.com/frozzel/cgi-pro-painters/blob/16c71319c5d5fb890c1149a39f0759a7a25fef34/src/images/Screenshot2.png)



## About Us

### Transform Your Online Presence

Whether you're looking to integrate CRM systems, optimize your e-commerce platform, or boost your search engine rankings, we have the expertise and dedication to bring your vision to life.

- Seamless CRM Integrations:

- Effortless E-commerce Solutions

- Innovative AI Integrations

- SEO Optimization Strategies

- Custom Web Development

- Mobile App Development

- Social Media Marketing Integrations

- Payment Processing Solutions

## Features

### Client-Side Features

#### Google Analytics Integration

Our client-side integration with Google Analytics allows us to track and analyze website traffic, providing valuable insights into user behavior and helping us improve our services.

#### HubSpot Form and CTA Integration

We have integrated HubSpot forms and CTAs (Calls-to-Action) to enhance our lead generation and customer engagement efforts. This integration helps us capture leads effectively and manage customer relationships efficiently.

### Server-Side Features

#### ChatGPT Auto Content Publisher

Our server-side includes a ChatGPT-powered auto content publisher that automatically generates and posts content to our Twitter, Instagram, and Facebook accounts. This ensures that our social media presence is consistently updated with engaging content.

## Technologies Used

- HTML/CSS
- JavaScript
- React 
- Node.js 
- Google Analytics
- HubSpot API
- OpenAI GPT-4 API (for auto content publisher)

## Contact Us

Interested in learning more about our services or booking a session? Get in touch with us through our [contact page](https://cyrusgroupinnovations.com) or email us at [Email](mailto:admin@cyrusgroupinnovations.com).


  
  ## Contributing 

  Created by: [@frozzel](https://github.com/frozzel)
  
  Please contact me with questions at: [@frozzel](mailto:frozzel@me.com)

  ## License
  
  [![Github license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## To Use CRA Depreciated
change package.json start script to:

```bash
 "start": "react-scripts --openssl-legacy-provider start",
 ```

 ## Delete Package lock.json
```bash
npm i
```

⤵️⤵️⤵️⤵️:

```bash
npm audit fix --force
```

🔥🔥🔥🔥:

```bash
npm run start
```

🏆🏆🏆🏆🏆🏆🏆🏆

---

### Remove Router Warnings
Add to Router Script:

```javascript
      <Router future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
```

### Remove Google Tags

Open Public folder. In `index.html` remove the script for google tracking:

```html
        <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-45799926-9"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
    </script>
```

⤵️⤵️⤵️⤵️:

Open `MainLandingPage.js` and Block out this code:

```jsx
      useEffect(() => {
            window.gtag("js", new Date());
            window.gtag("config", "UA-45799926-9");
        }, [])
```

🔥🔥🔥🔥

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Script

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

