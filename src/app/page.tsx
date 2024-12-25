"use client";

import About from "@/components/about";
import { Contact } from "@/components/contact";
import Header from "@/components/header";
import { Portofolio } from "@/components/portofolio";
import SkillAndTools from "@/components/skillAndTools";



export default function Home() {
    return (
        <div className="dark:bg-slate-900">
            <Header />
            <div className="px-5 mt-[73px] ">
                <About />
                <SkillAndTools />
                <Portofolio />
                <Contact />
            </div>
        </div>
    )
    
}
