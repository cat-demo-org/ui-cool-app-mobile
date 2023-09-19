import { Provider } from "react-redux";
import { redux } from "ui-cool-app-shared";
import { AppEntry } from "./AppEntry";

export default function App() {

    return (
        <Provider store={redux.store}>
            <AppEntry />
        </Provider>
    );
}
