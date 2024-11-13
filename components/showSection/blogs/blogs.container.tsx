import { BlogsInfo } from "@/components/constant/enum";
import Image from "next/image";
import Link from "next/link";
import ComponentLayout from "../ShowSectionComponent.layout";

const Blogs = () => {
  return (
    <ComponentLayout title="Blogs">
      <div className="flex  flex-wrap gap-6">
        {BlogsInfo.map((blog, index) => (
          <Link
            href={blog.link}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="w-1/5 flex gap-2 flex-col bg-primary hover:shadow-xl duration-300 ease-in-out  min-h-[370px] rounded-lg">
            <Image
              src={blog.imageURL}
              alt={blog.title}
              width={160}
              height={160}
              objectFit="cover"
              className="w-full h-[130px] rounded-t-lg"
              style={{ objectFit: "cover" }}
            />
            <div className="px-2 pb-3 flex flex-1 flex-col justify-between">
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-tertiary font-semibold ">{blog.title}</p>
                <p className="line-clamp-4">{blog.shortDes}</p>
              </div>
              <div className="flex gap-4  w-full">
                <div className="flex gap-0.5 text-sm items-center">
                  <Image
                    src="/images/eye.svg"
                    alt="eye"
                    width={18}
                    height={18}
                    className="pt-1"
                  />
                  <p>{blog.watchCount}</p>
                </div>
                <div className="flex gap-0.5 text-sm items-center">
                  <Image
                    src="/images/love.svg"
                    alt="eye"
                    width={14}
                    height={14}
                    className="pt-1"
                  />
                  <p>{blog.likeCount}</p>
                </div>
                <div className="flex gap-0.5 text-sm items-center">
                  <Image
                    src="/images/comment.svg"
                    alt="eye"
                    width={14}
                    height={14}
                    className="pt-1"
                  />
                  <p>{blog.commentCount}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default Blogs;
