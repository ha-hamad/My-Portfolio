import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React", 
        "TailwindCSS"
    ];

    const backendSkills = [
        "Node.js", 
        "Python",
        "AWS",
    ];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:border-blue-400 hover:bg-blue-500/20 hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Versatile and adaptive, excelling across disciplines with a rare blend 
                            of curiosity, precision, and ingenuity. Always ready to offer support, 
                            share knowledge, and tackle complex challenges with confidence and finesse.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 rounded-xl border-white/10 border hover:border-blue-400 hover:bg-blue-500/20 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>AbdulRahman Kanoo International School graduate</strong> - (2013-2023) 
                                        </li>
                                        <li>
                                            <strong>Full International Baccalaureate graduate</strong> - (2021-2023)
                                        </li>
                                        <li>
                                            <strong>Information Systems graduate</strong> - Bahrain Polytechnic (2024-2028)
                                        </li>
                                    </ul>

                                </div>
                                <div className="p-6 rounded-xl border-white/10 border hover:border-blue-400 hover:bg-blue-500/20 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <h4 className="font-semibold"> Add job experience here</h4>
                                            <p>(line 76 in About.jsx)</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold"> Add internship experience here</h4>
                                            <p>(line 81 in About.jsx)</p>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};