import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Import gallery images
import engagementImg from '@/assets/engagement-1.jpg';
import bridalImg from '@/assets/bridal-portrait-1.jpg';
import portraitImg from '@/assets/portrait-1.jpg';
import birthdayImg from '@/assets/birthday-1.jpg';
import groomImg from '@/assets/groom-portrait-1.jpg';
import preWeddingImg from '@/assets/pre-wedding-1.jpg';
import postWeddingImg from '@/assets/post-wedding-1.jpg';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'engagements', name: 'Engagements' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'events', name: 'Events' },
  ];

  const galleryItems = [
    {
      id: 1,
      image: engagementImg,
      category: 'engagements',
      title: 'Romantic Engagement',
      description: 'Outdoor engagement session in golden hour'
    },
    {
      id: 2,
      image: bridalImg,
      category: 'weddings',
      title: 'Bridal Elegance',
      description: 'Studio bridal portrait with elegant lighting'
    },
    {
      id: 3,
      image: portraitImg,
      category: 'portraits',
      title: 'Professional Portrait',
      description: 'Contemporary solo portrait session'
    },
    {
      id: 4,
      image: birthdayImg,
      category: 'events',
      title: 'Birthday Celebration',
      description: 'Joyful family birthday photography'
    },
    {
      id: 5,
      image: groomImg,
      category: 'weddings',
      title: 'Groom Portrait',
      description: 'Sophisticated groom photography'
    },
    {
      id: 6,
      image: preWeddingImg,
      category: 'weddings',
      title: 'Pre-Wedding Session',
      description: 'Romantic couple photography'
    },
    {
      id: 7,
      image: postWeddingImg,
      category: 'weddings',
      title: 'Post-Wedding Joy',
      description: 'Celebration after the ceremony'
    },
    {
      id: 8,
      image: portraitImg,
      category: 'portraits',
      title: 'Creative Portrait',
      description: 'Artistic individual photography'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Photography Portfolio
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our diverse collection of photography work, showcasing the beauty and emotion 
            we capture in every session.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id 
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground" 
                  : "border-border hover:bg-secondary"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-card group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="gallery-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="font-body text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;