import {IUIState} from './UIProvider';

type UIActionType = {type: '[UI] Change Modal Filter Inventory State '};

export const uiReducer = (state: IUIState, action: UIActionType): IUIState => {
  switch (action.type) {
    case '[UI] Change Modal Filter Inventory State ':
      return {
        isOpenFilterInventory: !state.isOpenFilterInventory,
      };
    default:
      return state;
  }
};
