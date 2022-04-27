import { FunctionComponent, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Link from 'next/link';
import { SubMenu } from '../header';

type Props = {
  menuItem: any;
  classes?: string;
  listClasses?: string;
};

const NavItem: FunctionComponent<Props> = ({ menuItem, classes, listClasses }) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  const openSubMenu = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`lg:relative lg:flex lg:flex-wrap lg:items-center ${listClasses}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <Link href={menuItem.link}>
        <a data-cy="nav-item" className={`flex items-center ${classes}`}>
          {menuItem.label}
          {menuItem?.subMenu && <BiChevronDown className="ml-[10px] text-primary lg:hidden" />}
        </a>
      </Link>

      {menuItem?.subMenu && (
        <BiChevronDown
          className="ml-auto mr-[10px] hidden h-5 w-5 bg-primary text-white lg:absolute lg:right-[10px] lg:top-5 lg:block "
          onClick={openSubMenu}
        />
      )}

      {hover && menuItem?.subMenu && <SubMenu submenu={menuItem?.subMenu} isBig={true} />}

      {open && menuItem?.subMenu && <SubMenu submenu={menuItem?.subMenu} isBig={false} />}
    </li>
  );
};

export default NavItem;
