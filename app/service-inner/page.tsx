import React from 'react';
import { notFound } from 'next/navigation';
import { getServiceInnerData } from '@/src/lib/cms';
import ServiceInnerTemplate from '@/src/app/components/dynamic/ServiceInnerTemplate';

// This page was static but the user wants to merge it with dynamic data.
// For now, we point it to a default service like 'pigmentation-treatment-in-gurgaon' 
// or tell the user how to use it dynamically with segments.

const ServiceInner = async () => {
    // Defaulting to pigmentation for visualization, 
    // but in a real dynamic setup this should be a dynamic route like [slug]/page.tsx
    const data = await getServiceInnerData('pigmentation-treatment-in-gurgaon');
    
    if (!data || !data.success) {
      return notFound();
    }

    return (
        <ServiceInnerTemplate data={data} />
    )
}
export default ServiceInner;