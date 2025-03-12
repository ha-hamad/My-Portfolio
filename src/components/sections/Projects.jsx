import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return(
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-8">
                    <style>
                        {`
                            .animated-gradient-text-projects {
                                background: linear-gradient(to right, #0066ff, #00ffff);
                                -webkit-background-clip: text;
                                background-clip: text;
                                color: transparent;
                                background-size: 300% auto;
                                animation: gradient 2s ease-in-out infinite;
                            }

                            @keyframes gradient {
                                0% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                                100% { background-position: 0% 50%; }
                            }

                            .project-title-divider {
                                position: relative;
                                padding-bottom: 10px;
                                margin-bottom: 0px;
                            }

                            .animated-line {
                                height: 6px;
                                background: linear-gradient(to right, #ffffff, #0066ff, #a855f7);
                                background-size: 200% auto;
                                animation: none;
                                margin-top: 6px;
                                width: 100%;
                            }

                            .project-title {
                                background: linear-gradient(to right, #0066ff, #00ffff);
                                -webkit-background-clip: text;
                                background-clip: text;
                                color: transparent;
                                background-size: 100% auto;
                                animation: none;
                            }

                            .title-divider-line {
                                height: 4px;
                                background: linear-gradient(to right,rgb(40, 123, 247),rgb(134, 4, 255));
                                background-size: 200% auto;
                                animation: lineGradient 2s ease-in-out infinite;
                                margin: 10px 0;
                                width: 100%;
                            }

                            @keyframes lineGradient {
                                0% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                                100% { background-position: 0% 50%; }
                            }
                        `}
                    </style>
                    <h2 className="text-4xl font-bold mb-4 animated-gradient-text-projects">
                        Featured Projects
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2 project-title-divider project-title">S2S Model (Under development/Collaboration)</h3>
                        <div className="title-divider-line"></div>
                        <p className="text-white mb-4">
                            A cutting-edge speech-to-speech AI, 
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
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                            > 
                                → Click Here to View Project ←
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2 project-title-divider project-title">Collection of Machine Learning Projects</h3>
                        <div className="title-divider-line"></div>
                        <p className="text-white mb-4">
                            A collection of machine learning projects created with the purpose to analyze specific datasets and come up with predictions based on the given data.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "Jupyter"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="#https://github.com/ha-hamad/My-machine-learning-study.git"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                            > 
                                → Click Here to View Project ←
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2 project-title-divider project-title">Database Project (Under development)</h3>
                        <div className="title-divider-line"></div>
                        <p className="text-white mb-4">
                            Under development...
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
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                            > 
                                → Please don't Click Here to View Project ←
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2 project-title-divider project-title">Java Project (Under development)</h3>
                        <div className="title-divider-line"></div>
                        <p className="text-white mb-4">
                            Under development...
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
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                            > 
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