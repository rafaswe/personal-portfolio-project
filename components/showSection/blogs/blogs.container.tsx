"use client";
import { BlogsInfo } from "@/components/constant/enum";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="w-full h-[88vh] flex justify-center py-4 overflow-y-auto hidden-scrollbar   bg-secondary ">
      <div className="space-y-6 w-10/12">
        {/* Header */}
        <div className="border-b border-text-dark pb-4">
          <h1 className="text-2xl font-bold text-white mb-2">Blog Portfolio</h1>
          <p className="text-disabled">
            A collection of technical articles and tutorials
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {BlogsInfo.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary rounded-lg border border-text-dark overflow-hidden hover:border-disabled transition-all duration-300 group">
              {/* Blog Image */}
              <div
                className="h-48 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${blog.imageURL})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                    blog#{index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <div className="">
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-quaternary transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-disabled text-sm mb-4 line-clamp-3">
                    {blog.shortDes}
                  </p>
                </div>

                {/* Stats */}
                <div className="">
                  <div className="flex items-center justify-between w-fit mb-4">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1 text-disabled">
                        <Eye className="w-4 h-4" />
                        <span>{blog.watchCount}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-tertiary">
                        <Heart className="w-4 h-4" />
                        <span>{blog.likeCount}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-quaternary">
                        <MessageCircle className="w-4 h-4" />
                        <span>{blog.commentCount}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-quaternary hover:bg-green-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors group-hover:bg-green-dark">
                    <span>Read Article</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="border-t border-text-dark pt-6 mt-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-secondary rounded-lg p-4">
              <div className="text-2xl font-bold text-quaternary">
                {BlogsInfo.length}
              </div>
              <div className="text-sm text-disabled">Total Articles</div>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <div className="text-2xl font-bold text-green-dark">
                {BlogsInfo.reduce((sum, blog) => sum + blog.watchCount, 0)}
              </div>
              <div className="text-sm text-disabled">Total Views</div>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <div className="text-2xl font-bold text-tertiary">
                {BlogsInfo.reduce((sum, blog) => sum + blog.likeCount, 0)}
              </div>
              <div className="text-sm text-disabled">Total Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
