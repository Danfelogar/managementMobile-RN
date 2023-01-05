import React, {FC} from 'react';
import {View} from 'react-native';
import {Snackbar} from 'react-native-paper';
interface Props {
  msmText: string;
  isOpen: boolean;
  isNotPlusIcon?: boolean;
  handleChangeSnackbar: () => void;
}

export const SnackbarSuccess: FC<Props> = ({
  msmText,
  isOpen,
  isNotPlusIcon,
  handleChangeSnackbar,
}) => {
  return (
    <View>
      <Snackbar
        style={{backgroundColor: '#55a630'}}
        wrapperStyle={{top: isNotPlusIcon ? -120 : msmText.length > 31 ? -160 : -144}}
        visible={isOpen}
        duration={5000}
        onDismiss={handleChangeSnackbar}>
        {msmText}
      </Snackbar>
    </View>
  );
};
