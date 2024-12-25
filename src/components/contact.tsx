import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

export function Contact () {
    return (
        <section id="contact" className="max-w-md mx-auto flex flex-col items-center mt-10">
            <h1 className="uppercase text-blue-500">Contact</h1>
            <h1 className="dark:text-white font-bold text-3xl mt-2">Get In Touch</h1>
            <p className="dark:text-white text-center mb-5 text-lg">If you have any questions, feel free to contact me via email.</p>
            <a 
                href="/pdfs/cv.pdf"
                download
                className=" bg-blue-600 flex justify-center items-center py-3 px-8 rounded-md">
                <span className="text-white font-bold">Email Me!</span>
            </a>
            <div className="my-10 flex flex-row justify-evenly  w-80">
                <a href="https://www.linkedin.com/in/yudit-a-9941ab318/" target="_blank">
                    <LinkedinIcon className="h-14 w-14" />
                </a>
                <a href="https://www.instagram.com/yudis.adit/?next=%2F" target="_blank">
                    <InstagramIcon className="h-14 w-14" />
                </a>
                <a href="https://github.com/nyomanyudisdeveloper" target="_blank">
                    <GithubIcon className="h-14 w-14" />
                </a>
            </div>
        </section>
    )
}