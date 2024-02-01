import Image from "next/image";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="bg-primary border-b border-black px-2 py-1 flex justify-between items-center text-sm">
      <div className="flex gap-4">
        <Image src="/images/vsCode.svg" alt="Icon" width={16} height={16} />
        <HeaderMenu />
      </div>
      <div className="flex-1 ">
        <div className="flex bg-secondary items-center gap-1 w-1/2 mx-auto justify-center py-0.5 rounded-lg">
          <Image
            src="/images/searchIcon-selected.svg"
            alt="search Icon"
            width={16}
            height={16}
            className="mt-1 "
          />
          <p>Mahiya Rahman Rafa</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p className="w-3 h-3 bg-[#d7f484] rounded-full"></p>
        <p className="w-3 h-3 bg-[#50fa7b] rounded-full"></p>
        <p className="w-3 h-3 bg-[#f9826c] rounded-full"></p>
      </div>
    </div>
  );
};

export default Header;
