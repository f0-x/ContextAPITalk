import Link from 'next/link';

const Button = ({ href, label, icon, classes }: { href?: any; label?: any; icon?: any; classes?: any }) => {
  return (
    <Link href={href}>
      <a
        className={`inline-flex items-center uppercase ${
          classes ? classes : ' bg-black-3a3 px-[35px] py-[15px] text-lg font-medium text-white '
        }`}
        title={label}
      >
        {icon && <span className="mr-[15px]">{icon}</span>}
        {label}
      </a>
    </Link>
  );
};

export default Button;
