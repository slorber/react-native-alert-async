import {
    AlertButton, AlertOptions,
} from "react-native";

// TODO it can be made better by typing the callbacks of AlertButton/AlertOptions
export default function AlertAsync<T = any>(title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions, type?: string): Promise<T>;
