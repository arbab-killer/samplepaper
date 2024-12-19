"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import Head from "next/head";
<Head>
  <title>Sample Papers for Class 12 </title>
  <meta name="description" content="Download and prepare with the latest UP Board 2024-2025 Class 12 sample papers for all subjects." />
</Head>

const Page = () => {
  const { subject } = useParams();
  return (
   
      <section className="py-6 h-screen flex justify-center items-center dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-3xl capitalize w-[70vw] font-semibold leading-tight text-center lg:text-left">
            Download <span className="text-violet-400 dark:text-violet-600">English Version </span> of {subject} <span className="text-orange-400 dark:text-gray-500">Sample Paper </span> And This site is Sponcered by{" "}
              <span>
                <Link
                  href="https://arbab.shop"
                  target="_blank"
                  className="text-violet-400 dark:text-violet-600 hover:border-b-2 dark:hover:border-violet-600 border-violet-400"
                >
                  Musicfy
                </Link>
              </span>
          </h1>
         
            <a className="px-8 hover:translate-x-[1px] hover:translate-y-[1px] dark:hover:shadow-lg transition-all ease-in shadow-none dark:hover:shadow-white shadow-purple-300 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50" href={`../../../../public/samplepaper/${subject}.pdf`} download>
              download
            </a>
          
        </div>
      </section>
    
  );
};

export default Page;
