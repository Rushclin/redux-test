import React from 'react'
import { Button, Text, TextInput, View } from "react-native"
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../../redux/actions'
import { styles } from '../../styles/styles'

const NewTodo = () => {
    const [input, setInput] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const addTodo = (todo) => {
        setLoading(true)
        dispatch(addTodoAction(todo))
        setTimeout(() => {
            setLoading(false)
            setInput("")
        }, 1500)
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Entrez la nouvelle TODO" style={styles.formControl} value={input} onChangeText={(text) => setInput(text)} />
            <Button title="VALIDER" onPress={() => addTodo(input)} />
            {loading && <Text>Chargement...</Text>}
        </View>
    )
}

export default NewTodo
