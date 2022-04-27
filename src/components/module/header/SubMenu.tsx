import Link from 'next/link';
import { FunctionComponent } from 'react';

type Props = {
  submenu?: any;
  isBig?: any;
};

const SubMenu: FunctionComponent<Props> = ({ submenu, isBig }) => {
  return (
    <div
      className={`sub-menu absolute top-[100%] left-1/2 z-20 w-full max-w-[904px] -translate-x-1/2 transform border border-gray-e3e bg-white font-mono text-4xl lg:static lg:max-h-[200px] lg:-translate-x-0 lg:overflow-y-auto lg:border-l-0 lg:border-r-0 ${
        isBig ? 'lg:hidden' : 'lg:block'
      }`}
    >
      <ul className={`m-0 flex list-none flex-wrap p-0 pt-[50px] text-xl lg:block lg:pt-[15px]`}>
        {submenu &&
          submenu.map((listData: any, idx: any) => {
            return (
              <li className="xs:w-full mb-[50px] w-1/2 px-[50px] lg:mb-[25px] lg:w-full lg:px-[15px]" key={idx}>
                <Link href="/">
                  <a className="text-lg font-bold">{listData.label}</a>
                </Link>
                {listData?.subMenu && (
                  <ul className="mt-[15px]">
                    {listData?.subMenu.map((submenuList: any, key: any) => {
                      return (
                        <li className="mb-[10px] last:mb-0" key={key}>
                          <Link href="/">
                            <a className="text-base font-light text-gray-656">{submenuList.label}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SubMenu;
