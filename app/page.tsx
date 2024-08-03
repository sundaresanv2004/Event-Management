import { Navbar, Footer, Hero, About, Events } from "@/components/shared";
import styles from "@/app/styles";

export default function Home() {
  return (
      <main className="w-full overflow-hidden">
          <Navbar/>

          <Hero />

          <div id="about" className={`bg-blue_bg ${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth} max-sm:mt-16 mt-7`}>
                  <About/>
              </div>
          </div>

          <div id="about" className={`bg-blue_bg ${styles.flexStart} ${styles.paddingX} h-screen`}>
              <div className={`${styles.boxWidth} max-sm:mt-16 mt-7`}>
                  <Events />
              </div>
          </div>

          <Footer/>
      </main>
  );
}
