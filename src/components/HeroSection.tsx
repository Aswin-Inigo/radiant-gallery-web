import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-wedding.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Professional Wedding Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
          Capturing Life's Most
          <span className="block text-gradient">Precious Moments</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 slide-up">
          Professional photography services for weddings, engagements, portraits, and special celebrations. 
          Creating timeless memories with artistic excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-gold px-8 py-3 text-lg font-semibold"
          >
            View Our Portfolio
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;