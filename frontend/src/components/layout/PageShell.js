import BackgroundBlobs from './BackgroundBlobs';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-white">
      <BackgroundBlobs />
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
