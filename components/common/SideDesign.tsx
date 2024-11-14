const SideDesign = () => {
  return (
    <div className="fixed right-0 top-1/2">
      <div className="relative ">
        <div className="absolute right-24 -top-[250px] bg-[#d7f484] w-32 h-32 rounded-full"></div>
        <div className="absolute right-72 bg-[#f9826c] -top-[100px]  w-24 h-24 rounded-full"></div>
        <div className="absolute overflow-hidden -right-24 -top-24 bg-[#f9826c] w-96 h-96 rounded-full">
          <div className="relative " style={{ transform: "rotate(-5deg)" }}>
            <div
              className="absolute top-16 -right-24 rounded-full border-secondary border-t-[24px] w-[500px] h-[500px]"
              style={{ transform: "rotate(-30deg)" }}></div>
            <div
              className="absolute top-44 right-36 rounded-full border-secondary border-b-[24px] w-24 h-32"
              style={{ transform: "rotate(-30deg)" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDesign;
