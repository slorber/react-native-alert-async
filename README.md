# react-native-alert-async

An Alert.alert() that you can await 

```jsx
import AlertAsync from "react-native-alert-async";

const myAction = async () => {

  const choice = await AlertAsync(
    'Title',
    'Message',
    [
      {text: 'Yes', onPress: () => 'yes'},
      {text: 'No', onPress: () => Promise.resolve('no')},
    ],
    {
      cancelable: true,
      onDismiss: () => 'no',
    },
  );

  if (choice === 'yes') {
    await doSomething();
  }
  else {
    await doSomethingElse();
  }
}
```

It always returns a promise, and that promise is guaranteed to resolve after the user made his choice.

It's just a wrapper around the original RN API so it's very tiny and does not require native code/linking, and is compatible with Expo.


There is an existing [RN PR](https://github.com/facebook/react-native/pull/20312) waiting to be merged with this feature. In the meantime you can use this package.
I use this in production for a long time and it's reliable.

# Hire a freelance expert

Looking for a React/ReactNative freelance expert with more than 5 years production experience?
Contact me from my [website](https://sebastienlorber.com/) or with [Twitter](https://twitter.com/sebastienlorber).
