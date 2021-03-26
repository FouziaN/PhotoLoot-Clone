import React from 'react'
import { TextInput, Text, StyleSheet, Dimension, View, Dimensions } from 'react-native'
import CustomTextInput from './CustomTextInput'

const { width, height } = Dimensions.get('window')
const NameTextField = ({ term, placeHolder, onTermChange, onTermSubmit }) => {
    return (
        <View>
            <Text style={styles.ErrorText} />
            <CustomTextInput
             autoCorrect={false}
             style={styles.TextField}
             placeholder={placeHolder}
             value={term}
             onChangeText={onTermChange}
             onEndEditing={onTermSubmit}
               
            />
          </View>
    )
}




const styles = StyleSheet.create({
    TextField: {
        fontSize: 14,
        flex: 1,
        marginHorizontal: 20
    },
    TextFieldView: {
        height: height * 0.07,
        width: width * 0.8,
        borderRadius: (height * 0.075) / 2,
        marginTop: 5,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
    },
    ErrorText: {
        fontSize: 12,
        color: 'red',
        marginBottom: -5,
        marginHorizontal: 20,

    }

})

export default NameTextField
