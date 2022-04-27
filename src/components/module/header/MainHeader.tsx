import { FunctionComponent, useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { IPrimaryMenu } from 'types/IHeader';
import { Nav } from '../header';

type Props = {
  height: number;
  primaryMenu: IPrimaryMenu[];
};

const MainHeader: FunctionComponent<Props> = ({ primaryMenu, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-header relative">
      <div className="container">
        <div className="flex flex-wrap items-center ">
          <Nav
            menus={primaryMenu}
            listClasses="lg:w-full"
            classes={`px-5 text-3xl font-bold font-mono capitalize leading-[61px] lg:w-full`}
            parentClass={` mx-auto lg:w-[320px] lg:fixed  lg:bottom-0 lg:bg-white lg:z-20 lg:border lg:border-r-0 lg:border-gray-e3e lg:transition-all ${
              !isOpen ? 'close lg:-right-[325px]' : 'open lg:right-[0px]'
            } `}
            height={height}
          />
          <span
            data-cy="hamburger-btn"
            className="menu-icon ml-auto mr-[23px] hidden text-black-3a3 lg:block"
            onClick={toggleMenu}
          >
            {!isOpen ? <AiOutlineMenuFold size="30px" /> : <GrClose size="30px" />}
          </span>
          <div className="header-accessories flex flex-wrap text-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
