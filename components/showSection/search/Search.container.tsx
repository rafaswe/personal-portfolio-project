"use client";

import EffectImage from "@/components/common/effectImage";
import ImageGallery from "@/components/common/ImageGallery";
import {
  ImageGalleryList,
  OnlinePresenceList,
} from "@/components/constant/enum";
import ReadMoreText from "@/components/layout/ReadMoreText";
import Tab from "@/components/layout/Tab";

import Image from "next/image";
import Link from "next/link";

// const Search = () => {
//   return (
//     <ComponentLayout title="Online Presence" className="w-full bg-secondary">
//       <div className="w-full h-full flex items-start flex-wrap gap-8">
//         {OnlinePresenceList?.map(singleSearch => (
//           <SearchCard singleSearchInfo={singleSearch} key={singleSearch.id} />
//         ))}
//       </div>
//     </ComponentLayout>
//   );
// };

const Search = () => {
  return (
    <div className=" py-8 h-[90vh] overflow-y-auto hidden-scrollbar w-10/12 gap-y-4 flex flex-col mx-auto">
      {/* header section  */}
      <SearchHeaderSection />
      <SearchBodySection />
    </div>
  );
};

const SearchHeaderSection = () => {
  return (
    <div className="flex gap-8">
      {/* Icon section */}
      <div className="w-1/12 flex items-center justify-center">
        <Image
          src={"/images/onlinePresence/onlinePresence.svg"}
          alt="Online Presence"
          width={160}
          height={160}
        />
      </div>

      {/* Details Section  */}
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-4xl font-semibold">Online Presence</p>
        <div className="flex gap-2 items-center">
          <p>Mahiya Rahman Rafa</p>
          <div className="w-0.5 h-3.5 mt-0.5 bg-white"></div>
          <div className="flex items-center gap-1.5">
            <Image
              src={"/images/onlinePresence/cloudDownload.svg"}
              alt="download"
              width={16}
              height={16}
            />
            <p>0,00,003</p>
          </div>
          <div className="w-0.5 h-3.5 mt-0.5 bg-white"></div>
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, key) => (
                <Image
                  key={key}
                  src={"/images/star.svg"}
                  alt="star"
                  width={16}
                  height={16}
                />
              ))}{" "}
            (1,32,385)
          </div>
        </div>
        <p>{`Honored with the President's Award, featured in newspapers — a proud showcase of my achievements and recognition.`}</p>
      </div>
    </div>
  );
};

const SearchBodySection = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <Tab>
        <Tab.Item title="Details">
          {OnlinePresenceList?.map((singleItem, index) => (
            <div key={index} className="py-4 flex flex-col gap-2.5">
              <div className="text-xl italic border-b border-[#717070] ">
                {singleItem?.url ? (
                  <Link
                    href={singleItem.url}
                    className="flex cursor-help items-center gap-2 "
                    target="_blank">
                    <p className="">{singleItem?.title}</p>
                    <Image
                      src={"/images/onlinePresence/linkArrow.svg"}
                      alt="linkArrow"
                      width={20}
                      height={20}
                    />
                  </Link>
                ) : (
                  <p>{singleItem?.title}</p>
                )}
              </div>
              <div>
                <ReadMoreText
                  text={singleItem?.description}
                  url={singleItem?.url}
                />
                <p className="text-sm italic pt-2.5">
                  Source: {singleItem?.src}
                </p>
              </div>
              <EffectImage
                src={singleItem?.imageURL}
                alt="Image URL"
                title={`"${singleItem?.title}" - ${singleItem?.src}`}
                width={200}
                height={200}
                className="w-[200px] h-[200px] rounded object-cover"
              />
            </div>
          ))}
        </Tab.Item>
        <Tab.Item title="Photos">
          <ImageGallery images={ImageGalleryList} />
        </Tab.Item>
      </Tab>
    </div>
  );
};
export default Search;
