"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header () {
    const [isModalShow,setIsModalShow] = useState(false)

    return (
        <>
        <header className="flex flex-row  px-5 py-2 justify-between lg:max-w-5xl lg:mx-auto">
            <span className="bg-black text-white px-5 py-2 font-bold ">Yudis Aditya</span>
            {!isModalShow ? <Image
                className="md:hidden"
                src="/menu.svg"
                alt="Menu Icon"
                width={20}
                height={20}
                onClick={() => setIsModalShow(true)}
            />
            : null }
            <nav className="hidden md:flex py-2">
                <ul>
                    <li className="float-start font-semibold text-xl underline underline-offset-8 mr-5">About Me</li>
                    <li className="float-start font-semibold text-xl underline underline-offset-8 mr-5">Skill & Tools</li>
                    <li className="float-start font-semibold text-xl underline underline-offset-8 mr-5">Portofolio</li>
                    <li className="float-start font-semibold text-xl underline underline-offset-8 mr-5">Contact</li>
                </ul>
            </nav>
        </header>
        {isModalShow ? (
                <div className="w-full h-full bg-white bg-opacity-80 fixed inset-0 ">
                    <div className="flex flex-row  px-5 py-4 justify-end ">
                        <Image
                            src="/close.svg"
                            alt="Close Icon"
                            width={25}
                            height={25}
                            onClick={() => setIsModalShow(false)}
                        />
                    </div>
                    <nav className=" mt-10">
                        <ul>
                            <li className="text-center font-semibold text-xl underline underline-offset-8 my-5">About Me</li>
                            <li className="text-center font-semibold text-xl underline underline-offset-8 my-5">Skill & Tools</li>
                            <li className="text-center font-semibold text-xl underline underline-offset-8 my-5">Portofolio</li>
                            <li className="text-center font-semibold text-xl underline underline-offset-8 my-5">Contact</li>
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