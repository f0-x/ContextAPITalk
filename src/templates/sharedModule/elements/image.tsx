import Image from 'next/image';
const Img = ({
  src,
  layout,
  altText,
  width,
  height,
  className,
}: {
  src?: any;
  layout?: any;
  altText?: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <>
      {layout ? (
        <Image src={src} className={className} layout={layout} alt={altText} priority={true} />
      ) : (
        <Image src={src} className={className} width={width} height={height} alt={altText} priority={true} />
      )}
    </>
  );
};

export default Img;
