"use client";
import { OnlinePresence } from "@/components/constant/type";
import linkArrow from "@/public/images/onlinePresence/linkArrow.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, ImageBox, TextBox } from "./Style";

const SearchCard = ({
  singleSearchInfo,
}: {
  singleSearchInfo: OnlinePresence;
}) => {
  const { imageURL, description, title, url } = singleSearchInfo;
  const router = useRouter();
  const imageVariants = {
    beforeHover: {},
    onHover: { scale: 1.4 },
  };

  const textVariants = {
    beforeHover: { opacity: 0 },
    onHover: { opacity: 1 },
  };

  const H1Variants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { delay: 0.7 } },
  };

  return (
    <Box
      className="border-2 shadow-xl border-white w-[25rem] h-[15rem]"
      initial="beforeHover"
      whileHover="onHover">
      <ImageBox image={imageURL} variants={imageVariants} />
      <TextBox variants={textVariants} className="flex flex-col gap-1">
        <p className="font-bold text-center border-b border-white pb-1">
          {`" ${title} "`}
        </p>
        <p className="text-sm">{description}</p>
        {url && (
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            passHref
            className="flex items-center gap-1 justify-end font-medium text-sm">
            <p>Know More</p>
            <Image src={linkArrow} alt="Link arrow" width={14} height={14} />
          </Link>
        )}
      </TextBox>
    </Box>
  );
};

export default SearchCard;
