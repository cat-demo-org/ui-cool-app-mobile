import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { redux } from "ui-cool-app-shared";

export function AppEntry() {

    const tString = redux.useAppSelector((s) => s.demo.testString);

    return (
        <View style={styles.container}>
            <Text>{tString}</Text>
            <Text>Test</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
