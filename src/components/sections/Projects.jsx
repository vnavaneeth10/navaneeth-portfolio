import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () =>{
    return <section id="projects" className="min-h-screen flex items-center jusitify-center py-20">
            
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 ">Food App</h3>
                        <p className="text-gray-400 mb-4 ">This is Food Delivery Web App where it has been implemented using JavaScript Library like ReactJs, ReduxJS Toolkit, Material UI, Context API</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Redux","Javascript", "react-Router" ].map((tech, key)=>{
                                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                  {tech}
                              </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <a href="https://github.com/vnavaneeth10/Food-App" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">View Project ▶️</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 ">Stream.io</h3>
                        <p className="text-gray-400 mb-4 ">A YouTube clone built with React.js, Redux Toolkit, and Tailwind CSS, featuring real-time video streaming, search, recommendations, and a responsive UI</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Redux","Javascript", "react-Router" ].map((tech, key)=>{
                                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                  {tech}
                              </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <a href="https://github.com/vnavaneeth10/youtube" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">View Project ▶️</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 ">Netflix-Gpt</h3>
                        <p className="text-gray-400 mb-4 ">A Netflix clone powered by React.js, Redux Toolkit, and Firebase, featuring AI-driven movie recommendations, user authentication, and a sleek, responsive UI</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Redux","Javascript", "react-Router" ].map((tech, key)=>{
                                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                  {tech}
                              </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <a href="https://github.com/vnavaneeth10/netflix-gpt" target="_blank"  className="text-blue-400 hover:text-blue-300 transition-colors">View Project ▶️</a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
    </section>
}