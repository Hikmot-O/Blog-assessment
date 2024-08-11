import React from "react";
import {Link} from 'react-router-dom'
import link from "../assets/link.svg";

const AllBlogs = () => {
  const blogs = [{}, {}, {}, {}, {}, {}];
  return (
    <section className="bg-[#F9F5FF] px-8">
      <header className=" text-[#6941C6] flex flex-col items-center py-[96px]">
        <div className="text-sm rounded-2xl bg-red-400 px-3 py-1">
          The Blog
        </div>
        <h2 className="text-5xl font-[600] pt-3 py-6">Resources and insights</h2>
        <p className="text-xl">The latest industry news, interviews, technologies, and resources.</p>
      </header>
      <main className=" bg-[#F9F5FF] pb-16">
        <div className="grid grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div className="bg-white w-auto h-auto p-6 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]">
              <div className="h-[240px] bg-black">
                {/* <img src="" alt="Blog image" className="" /> */}
              </div>
              <div className="mt-8">
                <Link to='/blog-details' className="flex items-center justify-between">
                  <h3 className="font-[600] text-2xl">
                    Migrating to Linear 101
                  </h3>
                  <div className="">
                    <img src={link} alt="Slanted up-arrow" className="" />
                  </div>
                </Link>
                <p className="pt-3 text-base">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get started.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default AllBlogs;
