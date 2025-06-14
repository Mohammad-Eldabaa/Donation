import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        flexDirection: 'row',
        flexWrap: 'wrap', // Enables wrapping into multiple rows
        justifyContent: 'space-between',
        padding: 0,
    },
    item: {
        marginTop:24,
        width: '48%', // Two items per row
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20
    },
});