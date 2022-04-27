import { createContext } from 'react';
import { IHeader } from 'types/IHeader';

type IHeaderContext = IHeader;

const initialValue: IHeaderContext = {
  primaryMenu: [],
  productMenu: [],
  secondaryMenu: [],
  footerMenu: [],
};

export const HeaderContext = createContext<IHeaderContext>(initialValue);
