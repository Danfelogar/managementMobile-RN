import React, {FC} from 'react';
import {View, Platform, StyleProp} from 'react-native';
import {Snackbar} from 'react-native-paper';

interface Props {
  msmText: string;
  isOpen: boolean;
  handleChangeSnackbar: () => void;
  styled?: StyleProp<any>;
}

export const SnackbarError: FC<Props> = ({
  msmText,
  isOpen,
  handleChangeSnackbar,
  styled,
}) => {
  return (
    <View>
      <Snackbar
        style={{backgroundColor: '#ff4d4f'}}
        wrapperStyle={
          styled
            ? {...styled}
            : {
                bottom: Platform.OS === 'ios' ? 93 : 60,
              }
        }
        visible={isOpen}
        duration={5000}
        onDismiss={handleChangeSnackbar}>
        {msmText}
      </Snackbar>
    </View>
  );
};
