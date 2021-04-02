import React, {useState} from 'react';
import { Text, StyleSheet,View} from 'react-native';
import CustomTextInput from './CustomTextInput';

interface Props {
  term : string,
  placeholder : string,
  onTermChange : any,
}

const UserNameTextField : React.FC<Props> = ({term, placeholder, onTermChange}) => {
  const [error, setError] = useState('');

  const isUserNameValid = () => {
    let UserName = term;
    let Pattern = /^[a-zA-Z0-9]+$/
    Pattern.test(String(UserName).toLowerCase())
      ? setError('')
      : setError('UserName not available');
  };

  return (
    <View>
      <CustomTextInput
        placeholder={placeholder}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={isUserNameValid}
      />
      <Text style={styles.ErrorText}> {error} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextField: {
    fontSize: 14,
    flex: 1,
    marginHorizontal: 20,
  },
  ErrorText: {
    fontSize: 12,
    color: 'red',
    marginHorizontal: 20,
    marginLeft: 45,

    marginTop: 10,
  },
});

export default UserNameTextField;

