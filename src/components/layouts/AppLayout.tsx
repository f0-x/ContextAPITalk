import { FunctionComponent, HTMLAttributes } from 'react';
import { Header } from 'components/module/header';

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

export const AppLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
