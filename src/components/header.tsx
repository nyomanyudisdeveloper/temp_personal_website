"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SliderButton from "./sliderButton";
import {CloseIcon, MenuIcon} from "./icons"

export default function Header () {
    const [isModalShow,setIsModalShow] = useState(false)
    const [activeMenu, setActiveMenu] = useState("about")
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null, 
            threshold: 0.35,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveMenu(entry.target.id); // Update active section
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    },[])

    const onClickMenu = (id:string) => {
        const section = document.getElementById(id)
        if(section){
            section.scrollIntoView({behavior:'smooth'})
            setIsModalShow(false)
        }
    }

    const onClickDarkMode = () => {
        if(isDarkMode){
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark');
        }
        else{
            setIsDarkMode(true)
            document.documentElement.classList.add('dark');
        }
    }

    return (
        <>
        <header className="fixed top-0 bg-white w-full border-b-2 dark:bg-slate-900">
            <div className="flex flex-row  px-5 py-2 justify-between lg:max-w-5xl lg:mx-auto">
                <span className="bg-slate-600 dark:bg-white text-white dark:text-slate-900 font-bold flex justify-center items-center px-5 text-2xl min-h-14 ">Yudis Aditya</span>
                {!isModalShow ?
                    <div onClick={() => setIsModalShow(true)} className="flex justify-center items-center">
                        <MenuIcon  className="md:hidden" />
                    </div>
                : null }
                <nav className="hidden md:flex py-2 ">
                    <ul className="flex flex-row items-center ">
                        <li className={` float-start font-semibold text-xl ${activeMenu == 'about' ? 'underline underline-offset-8 text-blue-400 ' : 'dark:text-white'} mr-3 cursor-pointer`}><Link href="#about">About Me</Link></li>
                        <li className={` float-start font-semibold text-xl ${activeMenu == 'skill' ? 'underline underline-offset-8 text-blue-400 ' : 'dark:text-white'} mr-3 cursor-pointer`}><Link href="#skill">Skill & Tools</Link></li>
                        <li className={` float-start font-semibold text-xl ${activeMenu == 'portofolio' ? 'underline underline-offset-8 text-blue-400 ' : 'dark:text-white'} mr-3 cursor-pointer`}><Link href="#portofolio">Portofolio</Link></li>
                        <li className={` float-start font-semibold text-xl ${activeMenu == 'contact' ? 'underline underline-offset-8 text-blue-400 ' : 'dark:text-white'} mr-3 cursor-pointer`}><Link href="#contact">Contact</Link></li>
                        <li className={` float-start mr-5 cursor-pointer`}><SliderButton value={isDarkMode} setValue={onClickDarkMode} /></li>
                    </ul>
                </nav>
            </div>
        </header>
        {isModalShow ? (
                <div className="w-full h-full bg-white dark:bg-slate-900 bg-opacity-80 fixed inset-0 ">
                    <div className="flex flex-row  px-5 py-4 justify-end ">
                        <div onClick={() => setIsModalShow(false)}>
                            <CloseIcon />
                        </div>
                    </div>
                    <nav className=" mt-10">
                        <ul>
                            <li onClick={() => onClickMenu('about')} className={` text-center font-semibold text-xl  my-5 ${activeMenu == 'about' ? 'underline underline-offset-8 text-blue-400' : 'dark:text-white'}`}>About Me</li>
                            <li onClick={() => onClickMenu('skill')} className={` text-center font-semibold text-xl my-5 ${activeMenu == 'skill' ? 'underline underline-offset-8 text-blue-400' : 'dark:text-white'} `}>Skill & Tools</li>
                            <li onClick={() => onClickMenu('portofolio')} className={` text-center font-semibold text-xl  my-5 ${activeMenu == 'portofolio' ? 'underline underline-offset-8 text-blue-400' : 'dark:text-white'}`}>Portofolio</li>
                            <li onClick={() => onClickMenu('contact')} className={` text-center font-semibold text-xl my-5 ${activeMenu == 'contact' ? 'underline underline-offset-8 text-blue-400' : 'dark:text-white'}`}>Contact</li>
                            <li className=" flex flex-row justify-center"><SliderButton value={isDarkMode} setValue={onClickDarkMode} /></li>
                        </ul>
                    </nav>
                </div>
            ) : (
                null
            )
        }
        </>
    );
}