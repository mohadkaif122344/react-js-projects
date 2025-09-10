import About from "./about";
import Contact from "./contact";


export default function Home() {

  return (
   <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyApp 🚀</h1>
      <p className=" text-lg">
        This is the home page. Navigate using the menu above.
      </p>


      <About />
      <Contact />
    </div>
  );
}
