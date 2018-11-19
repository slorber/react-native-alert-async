import React from "react";
import {
  Alert,
} from "react-native";


const AlertAsync = (
  title,
  message,
  buttons,
  options,
  type
) => {
  return new Promise((resolve, reject) => {
    const interceptCallback = callback => {
      if (!callback) {
        resolve();
      } else {
        try {
          const maybePromise = callback();
          if (maybePromise instanceof Promise) {
            maybePromise.then(resolve, reject);
          } else {
            resolve(maybePromise);
          }
        } catch (e) {
          reject(e);
        }
      }
    };

    const interceptedButtons = buttons
      ? buttons.map(button => ({
        ...button,
        onPress: () => interceptCallback(button.onPress),
      }))
      : buttons;

    const interceptedOptions = {
      ...options,
      onDismiss: () => interceptCallback(options.onDismiss),
    };

    Alert.alert(title, message, interceptedButtons, interceptedOptions, type);
  });
};

export default AlertAsync;
