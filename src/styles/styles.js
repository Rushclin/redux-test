import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width
    },
    floationButton: {
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    actionButton: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    formControl: {
        width: '90%',
        borderWidth: 1,
        paddingLeft: 10,
    },
    todoContainer: {
        width: Dimensions.get('screen').width,
        paddingLeft: 0,
        backgroundColor: 'white',
        borderWidth: 1,
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})