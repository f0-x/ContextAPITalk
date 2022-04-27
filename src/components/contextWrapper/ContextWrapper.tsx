import { HeaderContext } from 'contexts/HeaderContext';
import { FunctionComponent } from 'react';
import { IHeader } from 'types/IHeader';

type Props = {
  children: React.ReactNode;
  headerData: IHeader;
};

export const ContextWrapper: FunctionComponent<Props> = ({ children, headerData }) => {
  return <HeaderContext.Provider value={headerData}>{children}</HeaderContext.Provider>;
};
