import {IUIState} from './UIProvider';

type UIActionType =
  | {type: '[UI] Change Modal Filter Inventory State'}
  | {type: '[UI] Change Modal OT State'}
  | {type: '[UI] Toggle Snackbar Success'};

export const uiReducer = (state: IUIState, action: UIActionType): IUIState => {
  switch (action.type) {
    case '[UI] Change Modal Filter Inventory State':
      return {
        ...state,
        isOpenFilterInventory: !state.isOpenFilterInventory,
      };
    case '[UI] Change Modal OT State':
      return {
        ...state,
        isOpenOTModal: !state.isOpenOTModal,
      };
    case '[UI] Toggle Snackbar Success':
      return {
        ...state,
        isSnackbarSuccess: !state.isSnackbarSuccess,
      };
    default:
      return state;
  }
};
