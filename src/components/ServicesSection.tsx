import { Camera, Heart, Users, Star, Gift, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Complete wedding coverage from preparation to reception, capturing every precious moment of your special day.",
      features: ["Bridal preparation", "Ceremony coverage", "Reception photos", "Professional editing"]
    },
    {
      icon: Sparkles,
      title: "Engagement Sessions",
      description: "Romantic couple photography sessions to celebrate your love story and upcoming wedding.",
      features: ["Outdoor locations", "Studio sessions", "Multiple outfit changes", "Digital gallery"]
    },
    {
      icon: Star,
      title: "Bridal Portraits",
      description: "Elegant solo bridal sessions showcasing the beauty and grace of the bride-to-be.",
      features: ["Studio lighting", "Makeup consultation", "Multiple poses", "High-end retouching"]
    },
    {
      icon: Camera,
      title: "Groom Portraits",
      description: "Sophisticated portraits capturing the groom's personality and style before the big day.",
      features: ["Professional styling", "Multiple backdrops", "Formal & casual looks", "Premium prints"]
    },
    {
      icon: Users,
      title: "Pre & Post Wedding",
      description: "Beautiful couple sessions before and after your wedding to commemorate your journey.",
      features: ["Location flexibility", "Seasonal themes", "Anniversary sessions", "Custom packages"]
    },
    {
      icon: Gift,
      title: "Special Events",
      description: "Professional coverage for birthdays, anniversaries, and other milestone celebrations.",
      features: ["Event coverage", "Candid moments", "Group photos", "Quick delivery"]
    }
  ];

  return (
    <section id="services" className="section-spacing bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Photography Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate portraits to grand celebrations, we specialize in capturing the essence of every moment 
            with artistic vision and professional excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="shadow-studio hover:shadow-studio-medium transition-shadow duration-300 border-border/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6 font-body text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm font-body">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;