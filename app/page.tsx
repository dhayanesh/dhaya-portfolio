import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Resume from "@/components/main/Resume";
import Cards from "@/components/main/skillCard";

import Image from "next/image";

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Hero/>
                <Skills/>
                <Experience/>
                <Resume/>
                <Projects/>
            </div>
        </main>
    );
}
