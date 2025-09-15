import { Camera, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-xl text-gradient">
                LensArt Studio
              </span>
            </div>
            <p className="font-body text-accent-foreground/80 mb-6 max-w-md">
              Professional photography studio specializing in weddings, portraits, and life's most precious moments. 
              Creating timeless memories with artistic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#home" className="text-accent-foreground/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-accent-foreground/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-accent-foreground/80 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-accent-foreground/80 hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-accent-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 font-body">
              <li><span className="text-accent-foreground/80">Wedding Photography</span></li>
              <li><span className="text-accent-foreground/80">Engagement Sessions</span></li>
              <li><span className="text-accent-foreground/80">Bridal Portraits</span></li>
              <li><span className="text-accent-foreground/80">Solo Portraits</span></li>
              <li><span className="text-accent-foreground/80">Event Photography</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="font-body text-accent-foreground/60">
            © {currentYear} LensArt Studio. All rights reserved. Capturing moments, creating memories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;