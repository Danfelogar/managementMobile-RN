import {useContext, useState} from 'react';
import {ThemeContext, InventoryContext, UIContext} from '../../context';

const initialStateFilters = {
  searchName: '',
  typeInventory: '',
  state: '',
  exist: '-1/99999999999999',
};

export const useModalFilter = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {changeModalFilterInventory} = useContext(UIContext);
  const {getInventoriesData} = useContext(InventoryContext);
  const [stateFilters, setStateFilters] = useState(initialStateFilters);
  const {searchName, typeInventory, state, exist} = stateFilters;

  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
  } = colors;

  const changeDataWithTheFilter = () => {
    getInventoriesData(
      searchName,
      typeInventory,
      state,
      exist.split('/')[0],
      exist.split('/')[1],
    );
    changeModalFilterInventory();
  };
  const changeResetDataWithTheFilter = () => {
    setStateFilters(initialStateFilters);
    getInventoriesData();
    changeModalFilterInventory();
  };

  return {
    //state
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    searchName,
    typeInventory,
    state,
    exist,
    stateFilters,
    //methods
    setStateFilters,
    //functions
    changeDataWithTheFilter,
    changeResetDataWithTheFilter,
  };
};
