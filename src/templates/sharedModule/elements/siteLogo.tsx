import Link from 'next/link';
import Img from './image';

export const SiteLogo = ({ name, width, height }: { name?: any; width?: any; height?: any }) => {
  return (
    <div className="siteLogo">
      <Link href="/">
        <a className="flex">
          <Img
            src={`/images/logos/${name ? name : 'logo.svg'}`}
            width={width ? width : '135'}
            height={height ? height : '41'}
            altText="Toolfix"
          />
        </a>
      </Link>
    </div>
  );
};
