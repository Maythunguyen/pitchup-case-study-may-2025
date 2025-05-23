"use client";
import CaseStudiesPage from '@/components/case-study/CaseStudies';
import ProspectusSection from '@/components/case-study/Prospestus';
import React from 'react'


const page = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 flex flex-col gap-10">
        <CaseStudiesPage />
        <ProspectusSection />
    </div>
  )
}

export default page