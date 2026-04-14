import React from 'react'
import { Metadata } from 'next/dist/types';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Blog | Citrine Clinic",
  description: "Explore skincare and dermatology insights from Citrine Clinic.",
};

// Redirect /blog-post → /blogs (or keep as landing)
const BlogPost = () => {
  redirect('/blog');
};

export default BlogPost;