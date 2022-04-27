import { FunctionComponent } from 'react';
import { IMenuLink } from 'types/IHeader';
import { NavItem } from '../header';

type Props = {
  menus?: IMenuLink[];
  classes?: string;
  parentClass?: string;
  height?: number;
  listClasses?: string;
};

const Nav: FunctionComponent<Props> = ({ menus, classes, parentClass, height, listClasses }) => {
  return (
    <nav className={`nav lg:overflow-y-auto ${parentClass}`} style={{ top: height }}>
      <ul className="flex flex-wrap items-center">
        {menus &&
          menus.map((listData: any, idx: any) => {
            return <NavItem key={idx} menuItem={listData} classes={classes} listClasses={listClasses} />;
          })}
      </ul>
    </nav>
  );
};

export default Nav;
