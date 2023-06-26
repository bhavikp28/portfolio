import { lazy, Suspense } from 'react';
import { Footer, Navbar } from '../components';

const LazyHero = lazy(() => import('../sections/Hero'));
const LazyAbout = lazy(() => import('../sections/About'));
const LazyExplore = lazy(() => import('../sections/Explore'));
const LazyGetStarted = lazy(() => import('../sections/GetStarted'));
const LazyFeedback = lazy(() => import('../sections/Feedback'));

const Page = () => (
  <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 z-0">
    <Navbar />
    <div className="overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHero />
        <div className="relative">
          <LazyAbout />
          <div className="gradient-03 z-0" />
          <LazyExplore />
        </div>
        <div className="relative">
          <LazyGetStarted />
          <div className="gradient-04 z-0" />
        </div>
        <div className="">
          <div className="gradient-05 z-0" />
          <LazyFeedback />
        </div>
      </Suspense>
      <Footer />
    </div>
  </div>
);

export default Page;
