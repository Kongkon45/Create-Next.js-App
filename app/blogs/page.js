import Link from "next/link";
import React from "react";
const blogs = [
  {
    id: 1,
    title: "Blog 1",
    description: "Blog description 1",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Blog description 2",
  },
  {
    id: 3,
    title: "Blog 3",
    description: "Blog description 3",
  },
];

export default function Blog() {
  return (
    <div>
      <ul>
        {
            blogs?.map((blog)=> (
                <li key={blog.id}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
                
            ))
        }
      </ul>
    </div>
  );
}
