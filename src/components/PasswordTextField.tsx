import React, { useState } from 'react'
import { TextInput, Text, StyleSheet, Dimensions, View } from 'react-native'
import CustomTextInput from './CustomTextInput'

interface Props {
    term: any
    placeHolder: string
    onTermChange: any
  }

const PasswordTextField: React.FC<Props> = ({ term, placeHolder, onTermChange}) => {
    const [error, setError] = useState('')

    const isPasswordValid = () => {
        let password = term
        let Pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
        Pattern.test(String(password).toLowerCase()) ? setError('') : setError("Invalid Password")
    }
    
    return (
        <View>
            
                <CustomTextInput
                 autoCorrect={false}
                 secureTextEntry
                 style={styles.TextField}
                 placeholder={placeHolder}
                 value={term}
                 onChangeText={onTermChange}
                 onEndEditing={isPasswordValid}/>
                 <Text style={styles.ErrorText}>{error} </Text>
            </View>


       
    )

}

const styles = StyleSheet.create({
    TextField: {
        fontSize: 14,
        flex: 1,
        marginHorizontal: 20
    
    },
    ErrorText: {
        fontSize: 12,
        color: 'red',
        marginHorizontal: 20,
        marginLeft : 45,
    },

})

export default PasswordTextField