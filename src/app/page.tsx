import Header from "@/components/Header";
import Experience from "@/screens/Experience";
import Info from "@/screens/Info";
import Project from "@/screens/Projects";

export default function Home() {
  return (
    <div className="container flex-1 mx-auto">
      <Header />
      <section>
        <Info />
        <Experience />
        <Project />
      </section>
    </div>
  );
}
