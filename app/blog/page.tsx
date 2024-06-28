import BlogCard from "@/components/ui/BlogCard";
import { blogs } from "@/types";
import axios from "axios";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`
  );
  const blogs: blogs[] = response.data;
  return (
    <div className="text-[#000121] grid phone:grid-cols-1 tablet:grid-cols-2 w-[90%] phone:gap-[2rem] tablet:gap-[2rem] smLaptop:gap-[2rem]">
      {blogs &&
        blogs.length !== 0 &&
        blogs.map((blog, idx) => {
          return (
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/viewBlog/${blog.slug.current}`}
              key={idx}
              className="justify-center items-center flex hover:scale-105 transition p-4 rounded-[2rem]">
              <BlogCard
                title={blog.title}
                date={blog.publishedAt}
                description={blog.description}
                imageSrc={blog.mainImage}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default Page;
