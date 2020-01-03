import { AlertButton, AlertOptions } from "react-native";

interface AlertAsyncButton<T> extends Omit<AlertButton, "onPress"> {
  onPress?: () => (T | Promise<T>)
}

interface AlertAsyncOptions<T> extends Omit<AlertOptions, "onDismiss"> {
  onDismiss?: () => (T | Promise<T>)
}

export default function AlertAsync<T>(
  title: string,
  message?: string,
  buttons?: AlertAsyncButton<T>[],
  options?: AlertAsyncOptions<T>,
  type?: string
): Promise<T>;
