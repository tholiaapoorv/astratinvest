import BlogCard from "@/components/ui/BlogCard";
import { blogs } from "@/types";
import axios from "axios";
import Link from "next/link";
import React from "react";

const Page = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`,
    );
    const blogs: blogs[] = response.data;

    return (
      <div className="grid w-[90%] text-[#000121] phone:grid-cols-1 phone:gap-[2rem] tablet:grid-cols-2 tablet:gap-[2rem] smLaptop:gap-[2rem]">
        {blogs &&
          blogs.length !== 0 &&
          blogs.map((blog, idx) => {
            return (
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/viewBlog/${blog.slug.current}`}
                key={idx}
                className="flex items-center justify-center rounded-[2rem] p-4 transition hover:scale-105"
              >
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
  } catch (err) {
    console.log("Blog Page Error ==== ", err);
  }
};

export default Page;
