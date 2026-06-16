import Image from "next/image";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="bg-primary border-b border-black px-2 py-1 flex justify-between items-center text-sm">
      <div className="flex gap-4">
        <Image
          src="/images/vsCode.svg"
          alt="Icon"
          width={16}
          height={16}
          className="md:block hidden"
        />
        <HeaderMenu />
      </div>
      <div className="flex-1 ">
        <div className="flex bg-secondary items-center gap-1 w-fit px-2 md:px-0 md:w-1/2 mx-auto justify-center py-0.5 rounded-lg">
          <Image
            src="/images/searchIcon.svg"
            alt="search Icon"
            width={16}
            height={16}
            className="mt-1 "
          />
          <p className="text-[12px]">Mahiya Rahman Rafa</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p className="w-2 h-2  md:w-3 md:h-3 bg-green rounded-full"></p>
        <p className="w-2 h-2  md:w-3 md:h-3 bg-status-green rounded-full"></p>
        <p className="w-2 h-2  md:w-3 md:h-3 bg-tertiary rounded-full"></p>
      </div>
    </div>
  );
};

export default Header;
