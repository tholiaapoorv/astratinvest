import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import { getImageDimensions } from "@sanity/asset-utils";

import SanityImage from "@/components/ui/SanityImage";

import axios from "axios";
import { ChevronLeft, Loader } from "lucide-react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = async ({ params }: { params: { slug: string } }) => {
  if (!params.slug) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader className="animate-spin w-10 h-auto text-[#000121]" />
      </div>
    );
  }
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/viewBlog`,
    {
      headers: {
        slug: params.slug[0],
      },
    }
  );
  const blog = response.data;

  const SampleImageComponent = ({ value, isInline }: any) => {
    const { width, height } = getImageDimensions(value);
    return (
      <div className="w-full flex justify-center items-center">
        <SanityImage
          src={value}
          className="tablet:w-[50%] phone:w-[80%] object-contain  h-auto"
          style={{
            // Display alongside text if image appears inside a block text span
            display: isInline ? "inline-block" : "block",

            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
          }}
        />
      </div>
    );
  };
  const components: PortableTextComponents = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    block: {
      h1: ({ children }: any) => {
        return (
          <h1 className="text-[#000121] text-5xl font-semibold font-ivy">
            {children}
          </h1>
        );
      },
      h2: ({ children }: any) => {
        return (
          <h2 className="text-[#000121] text-4xl font-semibold font-ivy">
            {children}
          </h2>
        );
      },
      h3: ({ children }: any) => {
        return (
          <h3 className="text-[#000121] text-3xl font-semibold font-ivy">
            {children}
          </h3>
        );
      },
      h4: ({ children }: any) => {
        return (
          <h4 className="text-[#000121] text-2xl font-semibold font-ivy">
            {children}
          </h4>
        );
      },
      h5: ({ children }: any) => {
        return (
          <h5 className="text-[#000121] text-xl font-semibold font-ivy">
            {children}
          </h5>
        );
      },
      h6: ({ children }: any) => {
        return (
          <h6 className="text-[#000121] text-lg font-semibold font-ivy">
            {children}
          </h6>
        );
      },
      normal: ({ children }: any) => {
        return (
          <p className="text-[#000121] font-poppins font-light">{children}</p>
        );
      },

      blockquote: ({ children }: any) => {
        return (
          <blockquote className="text-[#3959e6] font-light font-poppins border-l-4 border-[#3959e6]">
            {children}
          </blockquote>
        );
      },
    },
    list: {
      bullet: ({ children }: any) => {
        return (
          <ul className="list-disc space-y-5 font-poppins text-[#000121] py-auto font-light">
            {children}
          </ul>
        );
      },
      number: ({ children }: any) => {
        return (
          <ol className="font-poppins list-decimal space-y-5 text-[#000121] py-auto font-light">
            {children}
          </ol>
        );
      },
    },
    marks: {
      link: ({ value, children }: any) => {
        return (
          <Link
            href={value.href}
            className="text-blue-700 rounded-md bg-blue-100 p-1 underline font-poppins font-semibold">
            {children}
          </Link>
        );
      },
    },
  };
  return (
    <div className="text-white w-full flex flex-col justify-center items-center">
      <div className="relative">
        <SanityImage
          src={blog[0].mainImage}
          className="relatve brightness-50 w-full"
        />
        <div className="absolute translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] font-ivy font-bold text-[min(10vw,10vh)]">
          {blog[0].title}
        </div>
      </div>
      <div className=" my-10 prose-base w-[80%]">
        <Breadcrumb className=" flex justify-center items-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="font-poppins">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog" className="font-poppins">
                All Blogs
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-poppins">
                {blog[0].title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {blog && blog.length !== 0 && (
          <PortableText value={blog[0].body} components={components} />
        )}
      </div>
    </div>
  );
};

export default page;
