import {Navbar, Footer, Hero} from "@/components/shared";


export default function Home() {
  return (
      <main className="w-full overflow-hidden">
          <Navbar/>

          <Hero />
          <div id={'about'} className="h-screen flex flex-col items-center justify-center bg-blue_bg">
              About
          </div>

          <Footer />
      </main>
  );
}
