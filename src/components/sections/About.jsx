import { RevealOnScroll } from "../RevealOnScroll"

export const About =() => {


    const frontendSkills = ["✔ React", "✔ Javascript","✔ Typescript", "✔ Tailwind CSS", "✔ HTML", "✔ CSS", "✔ Parcel/Webpack/Vite", "✔ Redux Toolkit", "✔ Git", "✔ Jest", "✔ Bootstrap", "✔ Firebase", "✔ Docker"];

    // const backendSkills = ["Node.js", "Express.js","MongoDB", "SQL"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
       
       <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
        </div>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">React Frontend Developer with 1+ years of experience crafting responsive, high-performance web applications using 
React.js, JavaScript, and Redux Toolkit. Skilled in state management, performance tuning, and leading code migrations 
from legacy stacks. Strong foundation in TDD, Agile collaboration, and scalable UI architecture. Proven ability to enhance 
user experience, reduce load times, and boost code quality through modern best practices.
</p>
        
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl  p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 ">Skills</h3>
                            <div className="flex flex-wrap  gap-2">
                                {frontendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                </div>

                {/* <div className="rounded-xl  p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 ">Backend</h3>
                            <div className="flex flex-wrap  gap-2">
                                {backendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                </div> */}
            </div>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 ">Education</h3>
                                <ul>
                                    <li>
                                        <strong> B.Tech Mechanical Engineering </strong> - ANNA UNIVERSITY [2014-2018]
                                    </li>
                                    {/* <li>
                                        Relevent Coursework: Data Structures, Web Development
                                    </li> */}
                                </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 ">Work Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Analyst at Amazon India (2020-Present)</h4>
                                        <hr className="my-2 w-70 border-t border-gray-300"/>
                                        <p>Conducted audits, developed the MMT Tool for mapping, and collaborated on Amazon Lens for image-based searches. Managed Agile workflows in JIRA, handled testing/debugging via the SIM ticketing system</p>

                                    </div>

                                    <div>
                                    
                                        <h4 className="font-semibold">Intern at ICTAK [Oct 2021 - Feb 2022]</h4>
                                        <hr className="my-2 w-70 border-t border-gray-300"/>
                                        <p>Was interned at ICTAK Kerala where i contributed to develop a full stack site for ICTAK</p>
                                        
                                    </div>
                                </div>
                </div>
            </div>
        </div>


        </RevealOnScroll>
    </section>
}
