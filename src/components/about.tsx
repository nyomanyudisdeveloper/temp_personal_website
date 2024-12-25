

import Image from "next/image";
import { useState } from "react";
import historyRecord from "../app/data/historyRecord.json"
import { ArrowLeft, ArrowRight } from "./icons";

export default function About () {
    const [indexYear,setIndexYear] = useState(0)


    const onClickArrowYear = (value:number) => {
        const total = indexYear + value
        if(total >= 0 && total <= historyRecord.length-1){
            setIndexYear(total)
        }
    }

    return (
        <section className="pt-5"  id="about">
            {/* Container for mobile */}
            <div className="py-2 md:hidden my-10">
                <h1 className="uppercase text-blue-500">Hello, my name is</h1>
                <h1 className="dark:text-white font-bold text-3xl mt-2">Yudis Aditya</h1>
                <h1 className="dark:text-white font-bold text-3xl">I am  <span className="text-blue-500">Software Developer</span></h1>
                <p className="dark:text-white mt-2">
                    I was born in Bekasi, 25 June 1995.  I hold a Master’s Degree in Computer Science 
                    from Bina Nusantara University. I have over five years of experience as a 
                    Software Engineer and two years of experience as a part-time online coding teacher.
                    To stay updated with the latest technology, I earned certifications as a QA Engineer 
                    from Jayjay and in Data Science from Hacktiv8.
                </p>
                <div className="mt-5">
                    <a 
                        href="/pdfs/cv.pdf"
                        download
                        className="w-full bg-blue-600 flex justify-center items-center py-3 rounded-md">
                        <span className="text-white font-bold">Download CV</span>
                    </a>
                </div>
            </div>
            {/* Container for md to Large */}
            <div className="py-2 md:flex hidden flex-row justify-between lg:max-w-5xl lg:mx-auto my-10">
                <div>
                    <h1 className="uppercase text-blue-500">Hello, my name is</h1>
                    <h1 className="dark:text-white font-bold text-3xl mt-2">Yudis Aditya</h1>
                    <h1 className="dark:text-white font-bold text-3xl">I am  <span className="text-blue-500">Software Developer</span></h1>
                    <p className="dark:text-white mt-2">
                        I was born in Bekasi, 25 June 1995.  I hold a Master’s Degree in Computer Science 
                        from Bina Nusantara University. I have over five years of experience as a 
                        Software Engineer and two years of experience as a part-time online coding teacher.
                        To stay updated with the latest technology, I earned certifications as a QA Engineer 
                        from Jayjay and in Data Science from Hacktiv8.
                    </p>
                    <div className="mt-5 md:w-44">
                        <a 
                            href="/pdfs/cv.pdf"
                            download
                            className="w-full bg-blue-600 flex justify-center items-center py-3 rounded-md">
                            <span className="text-white font-bold">Download CV</span>
                        </a>
                    </div>
                </div>
                <div className="ml-10 flex justify-center items-center">
                    <Image
                        className="rounded-md"
                        src="/images/self-profile.jpg"
                        alt="Profile"
                        width={800}
                        height={100}
                        priority
                    />
                </div>
            </div>
            <div className="py-2 md:hidden my-10">
                <h1 className="uppercase text-blue-500">About Me</h1>
                <h3 className="dark:text-white font-bold text-2xl mt-2">My Journey</h3>
                <div className="flex flex-row items-center my-2">
                    <div className="cursor-pointer" onClick={() => onClickArrowYear(-1)}>
                        <ArrowLeft className={`${indexYear == 0 ? 'text-gray-600 dark:text-gray-600' : ''}`} />
                    </div>
                    <span className="dark:text-white mx-1">{historyRecord[indexYear].year}</span>
                    <div className="cursor-pointer" onClick={() => onClickArrowYear(1)}>
                        <ArrowRight className={`${indexYear == historyRecord.length-1 ? 'text-gray-600 dark:text-gray-600' : ''}`} />
                    </div>
                </div>
                <h4 className="dark:text-white font-bold text-xl mt-5">{historyRecord[indexYear].place}</h4>
                <h5 className="dark:text-white font-light text-lg mt-2">{historyRecord[indexYear].title}</h5>
                <h6 className="dark:text-white font-light text-lg italic">{historyRecord[indexYear].rangeYear}</h6>
                <p className="dark:text-white mt-2">{historyRecord[indexYear].description}</p>
            </div>
            <div className="py-2 md:flex hidden flex-row justify-between lg:max-w-5xl lg:mx-auto my-10">
                <div className="mr-5 flex justify-center items-center  flex-[0.4]">
                    <Image
                        src="/images/journey.png"
                        alt="Journey"
                        width={300}
                        height={20}
                        className="object-cover"
                        onClick={() => onClickArrowYear(1)}
                    />
                </div>
                <div className="flex-[0.6]">
                    <h1 className="uppercase text-blue-500">About Me</h1>
                    <h3 className="dark:text-white font-bold text-2xl mt-2">My Journey</h3>
                    <div className="flex flex-row items-center my-2">
                        <div className="cursor-pointer" onClick={() => onClickArrowYear(-1)}>
                            <ArrowLeft className={`${indexYear == 0 ? 'text-gray-600 dark:text-gray-600' : ''}`} />
                        </div>
                        <span className="dark:text-white mx-1">{historyRecord[indexYear].year}</span>
                        <div className="cursor-pointer" onClick={() => onClickArrowYear(1)}>
                            <ArrowRight className={`${indexYear == historyRecord.length-1 ? 'text-gray-600 dark:text-gray-600' : ''}`} />
                        </div>
                    </div>
                    <h4 className="dark:text-white font-bold text-xl mt-5">{historyRecord[indexYear].place}</h4>
                    <h5 className="dark:text-white font-light text-lg mt-2">{historyRecord[indexYear].title}</h5>
                    <h6 className="dark:text-white font-light text-lg italic">{historyRecord[indexYear].rangeYear}</h6>
                    <p className="dark:text-white mt-2">{historyRecord[indexYear].description}</p>
                </div>
            </div>
        </section>
    )
}