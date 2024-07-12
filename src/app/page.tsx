import Header from "@/components/Header";
import Info from "@/screens/Info";

export default function Home() {
  return (
    <div className="container flex-1">
      <Header />
      <section>
        <Info />
      </section>
    </div>
  );
}
