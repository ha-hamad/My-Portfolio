import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <style>
                        {`
                            .animated-gradient-text-welcome {
                                background: linear-gradient(to right, #2563eb, #a855f7, #6366f1);
                                -webkit-background-clip: text;
                                background-clip: text;
                                color: transparent;
                                background-size: 200% auto;
                                animation: gradient 3s linear infinite;
                            }

                            @keyframes gradient {
                                0% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                                100% { background-position: 0% 50%; }
                            }
                        `}
                    </style>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animated-gradient-text-welcome">
                        Welcome, this is the Portfolio of Hamad Khaled Albaker
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    An aspiring Information Systems student with a keen 
                    ability to adapt and excel across various domains. 
                    </p>


                    <div className="flex justify-center space-x-4">
                        <a 
                            href="#projects" 
                            className="border-2 border-blue-500/50 text-blue-500 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 hover:font-bold"
                        >
                            View Projects
                        </a>

                        <a 
                            href="#contact" 
                            className="border-2 border-blue-500/50 text-blue-500 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 hover:font-bold"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};