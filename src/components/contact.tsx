import Image from "next/image";

export function Contact () {
    return (
        <div className="max-w-md mx-auto flex flex-col items-center mt-10">
            <h1 className="uppercase text-blue-500">Contact</h1>
            <h1 className="font-bold text-3xl mt-2">Get In Touch</h1>
            <p className="text-center mb-5 text-lg">If you have any questions, feel free to contact me via email.</p>
            <a 
                href="/pdfs/cv.pdf"
                download
                className=" bg-blue-600 flex justify-center items-center py-3 px-8 rounded-md">
                <span className="text-white font-bold">Email Me!</span>
            </a>
            <div className="my-10 flex flex-row justify-evenly  w-80">   
                <Image
                    src="/linkedin.svg"
                    alt="Linkedin"
                    width={40}
                    height={40}
                />
                <Image
                    src="/github.svg"
                    alt="Github"
                    width={40}
                    height={40}
                />
                <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    )
}