# ReactNativeWorkshop
In this workshop I will give a learning by doing introduction to React Native

## Set up:
Assuming that you have Node installed:

`npm install -g create-react-native-app`

`create-react-native-app StarWarsWikiDex`

`cd StarWarsWikiDex/`

`npm start`

You might have to install watchman with brew:

`brew update`

`brew install watchman`

get the Expo client app for your device, scan the QR-code in the terminal and see your App. (you have to be on the same network as your computer) 

now you can stop the process which is running `npm start`

In order to build single components with as little overhead as possible, at the beginning we will be using StoryBook.

`npm -g i @storybook/cli`

from inside the StarWarsWikiDex/ folder run:

`getstorybook`

go to the file StarWarsWikiDex/App.js and replace all content with the following single line:

```
export default from './storybook';
```

go to StarWarsWikiDex/ and run in two different tabs:

`npm start`

`npm run storybook`

now scan the QR code again with the Expo app. You should see storybook now.
Thats it!

