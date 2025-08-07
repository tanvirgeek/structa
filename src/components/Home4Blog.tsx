"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home4Blog = () => {
  return (
    <section className="app-section">
      <div className="container">
        <div className="w-full md:w-4/5 m-auto">
          {/* Header */}
          <div className="text-center space-y-2 mb-4 md:mb-8">
            <h6 className="text-sm uppercase text-gray-500">Our Blog</h6>
            <h2 className="text-3xl font-bold">Insights & Updates</h2>
          </div>

          {/* Blog Section */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Left Featured Post */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
              <Link href="/blogDetails">
                <div className="w-full h-full cursor-pointer">
                  <Image
                    src="/blog-home4.png"
                    alt="Featured Blog"
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-foreground via-foreground/70 to-transparent text-background p-4">
                    <p className="text-xs text-gray-300">by tanvirgeek</p>
                    <h3 className="font-semibold !text-background">
                      Building a Sustainable Future
                    </h3>
                    <hr className="my-2 border-background/30" />
                    <div className="flex justify-between text-sm">
                      <span className="text-primary font-medium">
                        Construction
                      </span>
                      <span className="text-gray-300">August 7, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Blog List */}
            <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
              {/* Blog Item 1 */}
              <Link href="/blogDetails">
                <div className="flex gap-4 items-center cursor-pointer">
                  <div className="relative w-48 h-48 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src="/blog1.png"
                      alt="Blog 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 h-full">
                    <p className="text-xs text-gray-500">by tanvirgeek</p>
                    <h4 className="text-lg font-semibold">
                      Modern Construction Tools
                    </h4>
                    {/* Spacer */}
                    <div className="flex-grow" />
                    <div className="flex justify-between text-sm text-gray-600 w-full">
                      <span className="text-primary">Innovation</span>
                      <span className="ml-2">July 12, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Blog Item 2 */}
              <Link href="/blogDetails">
                <div className="flex gap-4 items-center cursor-pointer">
                  <div className="relative w-48 h-48 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src="/blog2.png"
                      alt="Blog 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 space-y-1 h-full w-full">
                    <p className="text-xs text-gray-500">by tanvirgeek</p>
                    <h4 className="text-lg font-semibold">
                      Top Trends in 2025
                    </h4>
                    {/* Spacer */}
                    <div className="flex-grow" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span className="text-primary">Trends</span>
                      <span className="ml-2">June 28, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home4Blog;
