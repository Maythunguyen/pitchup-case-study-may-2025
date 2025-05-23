"use client";
import AdditionalQueriesForm from '@/components/fqa/AdditionalQueriesForm';
import FqaCategorized from '@/components/fqa/FqaCategorized';
import { fqas } from "@/data";
import React from 'react'

const page = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 flex flex-col gap-10">
        <FqaCategorized data={fqas}/>
        <AdditionalQueriesForm />
    </div>
  )
}

export default page