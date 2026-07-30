import FeatureCards from "@/components/FeatureCards";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-20 bg-white px-5 py-20 sm:px-10">
      <Hero />
      <FeatureCards />
    </main>
  );
}
