import Image from "next/image";
// import Link from "next/link";
// import photos from "@/photo";
import Navbar from "@/components/navbar";
import About from "./about/page";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Works from "@/components/works/Works";
import Feedbacks from "@/components/feedbacks";
import Contacts from "@/components/contacts/Index";
// import StarsCanvas from "@/components/canvas/stars";
import MyTabs from "@/components/tabs";
import heroImage from "@/assets/herobg.png";
import StarsCanvas from "@/components/canvas/star";

// import Contact from "@/components/contacts";

// export default function Home() {
//   return (
//     <main className="container">
//       <h1 className="text-center text-4xl m-10 font-bold">NextGram</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 m-10">
//         {photos.map(({ id, imageSrc }) => (
//           <Link key={id} href={`/photos/${id}`}>
//             <Image
//               alt="photos"
//               src={imageSrc}
//               width={500}
//               height={500}
//               className="object-cover w-full aspect-square"
//             />
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="relative  bg-[rgb(252,252,252)] text-black dark:bg-primary">
      <div
        className=" bg-cover bg-center"
        // style={{
        //   backgroundImage: `url(${heroImage.src})`,
        //   width: "100%",
        //   height: "100%",
        // }}
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <Feedbacks />
        <MyTabs />
      </div>
      <div className="relative z-0">
        <Contacts />
        <StarsCanvas />
      </div>
    </main>
  );
}
