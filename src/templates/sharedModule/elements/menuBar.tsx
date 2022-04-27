export const HeaderMenuBar = ({ navOpen, navClick }: { navOpen: any; navClick: any }) => {
  return (
    <div className="headerMenuBar fixed bottom-[15px] left-[15px] z-[110] bg-white">
      <div
        className={`menuBar 
                rounded-md border-2 border-solid  
                px-[15px] py-3 text-sm 
                font-bold leading-none 
				transition-all
                ${navOpen ? 'border-primary bg-primary text-white' : 'border-primary bg-white text-primary'}`}
        onClick={navClick}
      >
        {navOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </div>
    </div>
  );
};
