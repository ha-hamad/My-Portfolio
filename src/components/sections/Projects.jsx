import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return(
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Journaling App (Under development/Collaboration)</h3>
                        <p className="text-gray-400 mb-4">
                            A cutting-edge journaling app powered by a speech-to-speech AI, 
                            designed for seamless everyday use. It not only records and 
                            organizes your thoughts but also intelligently tracks themes, 
                            emotions, and patterns in your entries. With an interactive AI 
                            that engages in meaningful conversations based on your journals, 
                            it becomes more than just a diary—its a thoughtful companion that 
                            evolves with you.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Ollama", "Python"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/AitchEm-bot/S2S" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                → Click Here to View Project ←
                            </a>
                            
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Java Project (Under development)</h3>
                        <p className="text-gray-400 mb-4">
                            I have no idea yet fam...
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Java"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                → DO NOT Click Here to View Project ←
                            </a>
                            
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Database Project (Under development)</h3>
                        <p className="text-gray-400 mb-4">
                            Again, no clue yet...
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["SQL?"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                → Please don't Click Here to View Project ←
                            </a>
                            
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Networking Project? (Under development)</h3>
                        <p className="text-gray-400 mb-4">
                            They're all Uni projects man, leave me alone...
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["I'm reachin..."].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                → I swear bro if you Click Here to View Project ←
                            </a>
                            
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};