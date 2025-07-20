"use client";

import React from "react";
import Image from "next/image";

const BlogComments = () => {
  return (
    <section className="container my-12 space-y-10">
      {/* Heading */}
      <h3 className="text-2xl font-semibold text-foreground">3 Comments</h3>

      {/* Comments */}
      <div className="space-y-8">
        {/* Comment 1 */}
        <div className="flex items-start space-x-4">
          <Image
            src="/profile2.png"
            alt="User"
            width={50}
            height={50}
            className="object-cover"
          />
          <div className="flex-1 space-y-1">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-foreground">John Doe</h4>
              <span className="text-sm text-muted-foreground">
                July 14, 2025
              </span>
            </div>
            <p className="text-muted-foreground">
              This is a very insightful article. The trends mentioned here are
              spot on!
            </p>
            <button className="text-sm text-primary hover:underline">
              Reply
            </button>

            {/* Nested Reply */}
            <div className="pl-8 mt-6 border-l border-border flex space-x-4">
              <div className="w-[45px] h-[45px] relative rounded-full overflow-hidden">
                <Image
                  src="/profile1.png"
                  alt="Reply User"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-foreground">Jane Smith</h4>
                  <span className="text-sm text-muted-foreground">
                    July 15, 2025
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Totally agree! I’m already applying some of these ideas to my
                  current project.
                </p>
                <button className="text-sm text-primary hover:underline">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comment 2 */}
        <div className="flex items-start space-x-4">
          <Image
            src="/profile2.png"
            alt="User"
            width={50}
            height={50}
            className="object-cover"
          />
          <div className="flex-1 space-y-1">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-foreground">Alex Johnson</h4>
              <span className="text-sm text-muted-foreground">
                July 16, 2025
              </span>
            </div>
            <p className="text-muted-foreground">
              I really liked the part about AI optimizing energy usage. That’s
              the future!
            </p>
            <button className="text-sm text-primary hover:underline">
              Reply
            </button>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <div className="space-y-6">
        <h4 className="text-xl font-semibold text-foreground">
          Leave a Comment
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-background border border-border rounded-lg p-3 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-background border border-border rounded-lg p-3 text-sm"
          />
        </div>
        <textarea
          rows={4}
          placeholder="Write your comment..."
          className="w-full bg-background border border-border rounded-lg p-3 text-sm"
        ></textarea>

        <div className="flex items-start space-x-2">
          <input type="checkbox" id="save-info" className="mt-1" />
          <label htmlFor="save-info" className="text-sm text-muted-foreground">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <button className="bg-primary text-background px-6 py-2 rounded-lg hover:bg-primary/90 transition">
          Post Comment
        </button>
      </div>
    </section>
  );
};

export default BlogComments;
