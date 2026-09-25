import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] transition-colors duration-500 dark:bg-[#111315]">
      <Hero />
    <ImageSlider />
    </main>
  );
}