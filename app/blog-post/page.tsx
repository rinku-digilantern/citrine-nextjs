import React from 'react'
import { Metadata } from 'next/dist/types';
import AppointmentSection from '@/src/app/components/homepage/AppointmentSection/AppointmentSection';
import Breadcrumb from '@/src/app/components/common/Breadcrumb/Breadcrumb';
import BlogBanner from '@/src/app/components/BlogDetails/BlogBanner/BlogBanner';
import BlogContent from '@/src/app/components/BlogDetails/BlogContent/BlogContent';
import RecentPost from '@/src/app/components/BlogDetails/RecentPost/RecentPost';

export const metadata: Metadata = {
  title: "How to Choose the Right Skin Clinic for Acne Treatment?",
  description: "Acne can affect your skin and confidence. Get personalized acne care from Dr Niti Gaur at Citrine Clinic. Book your consultation today.",
  alternates: {
    canonical: '/blog-post/how-to-choose-the-right-skin-clinic-for-acne-treatment',
  },
  openGraph: {
    url: 'https://www.citrineclinic.com/blog-post/how-to-choose-the-right-skin-clinic-for-acne-treatment',
  },
};


const BlogPost = () => {
    return (
        <>
        {/* <div className={`breadcrumbLeft ${styles.breadcrumbLeft}`}> */}
          <Breadcrumb />
        {/* </div> */}
          <BlogBanner/>
          <BlogContent/>
          <RecentPost/>
          <AppointmentSection />  
        </>
    )
}
export default BlogPost;