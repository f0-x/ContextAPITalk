import React, { FunctionComponent, useContext, useEffect, useRef, useState } from 'react';
import { HeaderContext } from 'contexts/HeaderContext';
import { MainHeader } from '../header';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { InternalLink } from 'components/link';

const Header: FunctionComponent = () => {
  const router = useRouter();
  const noHeaderRoute =
    router.pathname === '/register' || router.pathname === '/login' || router.pathname === '/checkout';
  const { primaryMenu, secondaryMenu } = useContext(HeaderContext);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const heightMap: any = ref?.current?.clientHeight;
    setHeight(heightMap);
  }, []);

  return (
    <>
      {noHeaderRoute ? (
        <header className="loginHeader border-b border-solid border-gray-e3e">
          <div className="container">
            {router.pathname === '/checkout' ? (
              <div className="flex items-center justify-center py-5 sm:flex-col">{/* <SiteLogo /> */}</div>
            ) : (
              <div className="flex items-center justify-between py-5 sm:flex-col">
                {/* <SiteLogo /> */}
                <InternalLink href="/" className="nextBtn grid cursor-pointer grid-cols-auto-1 gap-4 sm:mt-[10px]">
                  <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full border border-solid border-primary bg-primary text-xs">
                    <FaArrowLeft className="text-white" />
                  </div>
                  <span className="text-base font-bold uppercase text-primary">Return to website</span>
                </InternalLink>
              </div>
            )}
          </div>
        </header>
      ) : (
        <header className="site-header sticky top-0 z-[999] border-b border-gray-e3e bg-green-300 py-12" ref={ref}>
          <MainHeader primaryMenu={primaryMenu} height={height} />
        </header>
      )}
    </>
  );
};

export default Header;
