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
      <div>
        {
            blogs?.map((blog)=> (
               <ul key={blog.id}>
                 <li>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
                <li>{blog.description}</li>
               </ul>
                
            ))
        }
      </div>
    </div>
  );
}
