import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, Hero } from '../sections';

const Page = () => (
  <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 z-0">
    <Navbar />
    {/* asda */}
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="">
        <div className="gradient-05 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  </div>
);

export default Page;
