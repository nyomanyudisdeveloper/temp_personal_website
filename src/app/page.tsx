"use client";

import About from "@/components/about";
import { Contact } from "@/components/contact";
import Header from "@/components/header";
import { Portofolio } from "@/components/portofolio";
import SkillAndTools from "@/components/skillAndTools";



export default function Home() {
    return (
        <>
            <Header />
            <div className="px-5 mt-20">
                <About />
                <SkillAndTools />
                <Portofolio />
                <Contact />
            </div>
        </>
    )
    
}
