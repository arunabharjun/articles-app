# Articles Browsing app with infinite scrolling using Next.js
<!-- ![](screens/ScreenShot.png) -->

## ▶️ Getting Started

1. Open terminal in your project directory

2. Clone the repo

```bash
git clone https://github.com/arunabharjun/articles-app.git
```

3. In your root directory, create a new file with the name "next.config.js" and copy the following in that file

```js
module.exports = {
	env: {
		API: 'https://api.nytimes.com/svc/search/v2',
		API_KEY: 'YOUR_API_KEY_HERE',
		IMAGE_API: ' https://static01.nyt.com',
		SEARCH_ENDPOINT: 'articlesearch.json',
		DEFAULT_QUERY: 'india',
		APP_NAME: 'Articles App'
	}
};
```

4. Notice the **API_KEY** says **YOUR_API_KEY_HERE**

5. Lets create one.

## 🔑 Creating your API key from [https://developer.nytimes.com/apis](https://developer.nytimes.com/apis)

1. If you don't already have an account, visit the following link and create one.

[Register - NYT API](https://developer.nytimes.com/accounts/create)

2. If you have an account, visit the following link and login

[Login - NYT API](https://developer.nytimes.com/accounts/login)

3. Then visit the following link to create a new app

[New APP - NYT API](https://developer.nytimes.com/my-apps/new-app)

4. Fill in all the details as asked

5. In the same page, under APIs section, for the 'Article Search API', click on the plus (+) sign against it and see the status change (Should say 'Active')

6. Then press the 'CREATE' button to get the API key.

7. Visit the following link and you will see you app listed there if the app was successfully created

[APP List - NYT API](https://developer.nytimes.com/my-apps)

8. Find your app in that list and click on it.

9. In that page, you will see 'API Keys', copy the value against 'Key'.

## 🌐 Setting up the environment variable for API Key

1. Go back to the root directory and in the "next.config.js" file, replace "YOUR_API_KEY_HERE" with the API Key you copied from the previous step.

## ⬇️ Installing dependencies

1. Open terminal in the root directory and run the following command

```bash
npm install
```

## 🖥 Viewing the app

1. Start the Next.js app

```bash
npm run dev
```

The app should have opened in your default browser, but if it didn't, visit [http://localhost:3000/](http://localhost:3000/)

## 🌟 Features

1. Browse latest articles from NYT
2. Has infinite scrolling
3. Respponsive design
4. Modern UI
