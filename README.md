## React One Page Web Store (no backend required)

The purpose of this project is to create one page web app store that doesn't require a backend.
All it requires is a stripe API key and AWS API Url in order to charge a user when they purchase something from this web page.

## Limitations

This is a 100% front end web store. No backend is required for anyone to make credit card transaction.
However, since this app has no backend, no data or traffic of anyone that visits this page will be recorded.

## Installation and builds

Run `npm install` to get all require packages
Run `npm run build` to minify or deployment

Add whatever package or library to build your own front end web store

Happy building your store :D

## API keys and endpoints

In the constants folder, there is a config file for you to customize and change your API key and settings.
You will need to hook the endpoints of your AWS and stripe API keys to that file.

Note: For security purposes, please put all your private keys and endpoint in a .env file to hide private links.

## Checkout Component

In order to bring up the Stripe modal button for users to insert their credit card information, import the CheckOutModal module to the component where you wish to charge a user.

To see an example on how it works, look at app.js where the checkout module is injected below the header.
