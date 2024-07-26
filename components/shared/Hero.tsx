import styles from "@/app/styles";


const Hero = () => (
    <div className="min-h-[calc(100vh-0rem)] h-full w-full text-white bg-[#0d1117]" id='home'>
        <main className="w-full h-full">
            <div
                className="snap-start w-full bg-fixed h-screen bg-slate-9 flex items-center justify-center bg-hero-img bg-no-repeat bg-center bg-cover"
            >
                <div className="bg-black w-full h-full bg-opacity-50 flex items-center justify-center flex-col">
                    <h1
                        className="text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500
                            via-yellow-300 to-rose-600 group uppercase relative tracking-widest text-[4rem] md:text-[6rem]
                            lg:text-[12rem] font-['Montserrat']"
                    >
                        Nexus
                    </h1>
                    <div className="text-white">
                        <h3 className={`${styles.heading1}`}>Encore 24</h3>
                    </div>
                </div>
            </div>
        </main>
    </div>
)

export default Hero;