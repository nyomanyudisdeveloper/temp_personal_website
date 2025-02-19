"use client";

import About from "@/components/about";
import { Contact } from "@/components/contact";
import Header from "@/components/header";
import { Portofolio } from "@/components/portofolio";
import SkillAndTools from "@/components/skillAndTools";
import Head from "next/head";

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yudis Aditya",
    "url": "https://www.yudisaditya.com/",
    "image": "https://www.yudisaditya.com/images/self-profile.jpg",
    "jobTitle": "Software Developer",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Bina Nusantara University",
      "sameAs": "https://binus.ac.id/"
    },
    "description": "I am a software developer with over five years of experience, holding a Master's Degree in Computer Science from Bina Nusantara University. I also have two years of experience as a part-time online coding teacher and certifications in QA Engineering and Data Science.",
    "sameAs": [
      "https://www.linkedin.com/in/yudit-a-9941ab318/",
      "https://www.instagram.com/yudis.adit/",
      "https://github.com/nyomanyudisdeveloper"
    ],
    // "worksFor": {
    //   "@type": "Organization",
    //   "name": "Your Company Name",
    //   "url": "https://yourcompany.com"
    // },
    "knowsAbout": [
      "Software Development",
      "Web Development",
      "Automation Testing",
      "Data Science",
      "JavaScript",
      "Python",
      "Django",
      "Vue",
      "React",
      "Node.js"
    ],
    // "hasOccupation": {
    //   "@type": "Occupation",
    //   "name": "Software Engineer",
    //   "estimatedSalary": {
    //     "@type": "MonetaryAmount",
    //     "currency": "USD",
    //     "value": "50000"
    //   }
    // },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "QA Engineer Certification",
        "issuer": {
          "@type": "Organization",
          "name": "Jayjay"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Data Science Certification",
        "issuer": {
          "@type": "Organization",
          "name": "Hacktiv8"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Projects",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "name": "API Transaction Service",
          "description": "Developed an API for handling transactions, including authentication, middleware, unit testing, and email notifications.",
          "url": "https://contract-sims.vercel.app/api-docs/",
          "about": ["Node.js", "PostgreSQL", "Swagger", "JWT"]
        },
        {
          "@type": "CreativeWork",
          "name": "Perpustakaan Online",
          "description": "Developed a website for borrowing books, including account registration, transaction management, and pagination.",
          "url": "https://github.com/nyomanyudisdeveloper/perpustakaanOnline",
          "about": ["Django", "SQLite"]
        },
        {
          "@type": "CreativeWork",
          "name": "WisataApp",
          "description": "Developed a frontend for hotel booking using API integration, state management, and responsive design.",
          "url": "https://github.com/nyomanyudisdeveloper/wisataApp",
          "about": ["Nuxt.js", "Tailwind", "JavaScript"]
        }
      ]
    }
  }


export default function Home() {
    return (
        <>
            <Head>
                <title>Yudis Aditya - Software Developer</title>
                <meta name="description" content="Personal portfolio website of Yudis Aditya, a software developer with expertise in JavaScript, Python, and web technologies." />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
            </Head>
            <div className="dark:bg-slate-900">
                <Header />
                <div className="px-5 mt-[73px] ">
                    <About />
                    <SkillAndTools />
                    <Portofolio />
                    <Contact />
                </div>
            </div>
        </>
    )
    
}
