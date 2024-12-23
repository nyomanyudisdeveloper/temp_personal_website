

export default function About () {
    return (
        <div className="px-5 py-2">
            <h1 className="uppercase text-blue-500">Hello, my name is</h1>
            <h1 className="font-bold text-3xl mt-2">Yudis Aditya</h1>
            <h1 className="font-bold text-3xl">I am  <span className="text-blue-500">Software Developer</span></h1>
            <p className="mt-2">
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
    )
}