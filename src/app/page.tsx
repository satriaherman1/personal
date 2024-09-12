import Footer from "@src/components/commons/footer";
import Navbar from "@src/components/commons/navbar";
import Hero from "@src/components/containers/home/hero";
import PortfolioGallery from "@src/components/containers/home/portfolio-gallery";
import Testimonials from "@src/components/containers/home/testimonials";
import WorkExperience from "@src/components/containers/home/work-experience";

export default function Home() {
  return (
    <div>
      <Navbar className="fixed bottom-0 md:top-0 w-full h-fit" />
      <Hero />
      <WorkExperience />
      <PortfolioGallery />
      <Testimonials />
      <Footer />
    </div>
  );
}
