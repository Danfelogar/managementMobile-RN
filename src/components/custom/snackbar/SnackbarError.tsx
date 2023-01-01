import React, {FC} from 'react';
import {View, Platform} from 'react-native';
import {Snackbar} from 'react-native-paper';
interface Props {
  msmText: string;
  isOpen: boolean;
  handleChangeSnackbar: () => void;
}

export const SnackbarError: FC<Props> = ({
  msmText,
  isOpen,
  handleChangeSnackbar,
}) => {
  return (
    <View>
      <Snackbar
        style={{backgroundColor: '#ff4d4f'}}
        wrapperStyle={{bottom: Platform.OS === 'ios' ? 93 : 60}}
        visible={isOpen}
        duration={5000}
        onDismiss={handleChangeSnackbar}>
        {msmText}
      </Snackbar>
    </View>
  );
};
