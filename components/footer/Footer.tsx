import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary h-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="px-2  cursor-pointer bg-tertiary w-fit flex items-center"
            title="Open In A New Window">
            <Image
              src="/images/remote.svg"
              alt="remote"
              width={18}
              height={18}
            />
          </div>
          <div
            className="px-2 cursor-pointer hover:bg-[#3b4252] w-fit flex items-center text-sm gap-0.5"
            title="Mahiya Rahman Rafa(Git)- main*. Checkout Github">
            <Image
              src="/images/branch.svg"
              alt="branch"
              width={16}
              height={16}
            />
            <p>main*</p>
          </div>
          <div
            className="px-2 cursor-pointer hover:bg-[#3b4252] w-fit flex items-center text-sm gap-0.5"
            title="No Issue">
            <div className="flex items-center gap-0.5">
              <Image
                src="/images/cross.svg"
                alt="branch"
                width={16}
                height={16}
              />
              <p>0</p>
            </div>
            <div className="flex items-center gap-0.5">
              <Image
                src="/images/warning.svg"
                alt="branch"
                width={16}
                height={16}
              />
              <p>0</p>
            </div>
          </div>

          <div
            className="px-1 cursor-pointer hover:bg-[#3b4252] w-fit flex items-center text-sm gap-0.5"
            title="No Ports Forward">
            <Image src="/images/tower.svg" alt="tower" width={16} height={16} />
          </div>
        </div>

        <div className="flex text-sm items-center">
          <div className="px-2 cursor-pointer hover:bg-[#3b4252] w-fit flex items-center text-sm gap-0.5">
            <Image src="/images/live.svg" alt="branch" width={18} height={18} />
            <p>Live</p>
          </div>
          <div className="px-2 cursor-pointer hover:bg-[#3b4252] w-fit flex items-center text-sm gap-0.5">
            <p>&copy; Mahiya Rahman Rafa</p>
          </div>
          <div className="px-2 cursor-pointer hover:bg-[#3b4252] w-fit flex items-center text-sm gap-0.5">
            <Image src="/images/tick.svg" alt="branch" width={18} height={18} />
            <p>Prettier</p>
          </div>
          <div className="px-2 cursor-pointer w-fit h-full flex items-center text-sm gap-0.5">
            <Image src="/images/bell.svg" alt="branch" width={14} height={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
