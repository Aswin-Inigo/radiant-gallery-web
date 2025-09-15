import { Award, Users, Camera, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Couples' },
    { icon: Camera, number: '1000+', label: 'Events Captured' },
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: Heart, number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About LensArt Studio
            </h2>
            <div className="space-y-6 font-body text-muted-foreground">
              <p className="text-lg">
                Welcome to LensArt Studio, where every moment becomes a masterpiece. With over 5 years 
                of experience in professional photography, we specialize in capturing the essence of 
                life's most precious occasions.
              </p>
              <p>
                Our passion lies in creating timeless images that tell your unique story. From intimate 
                engagement sessions to grand wedding celebrations, from professional portraits to 
                milestone birthdays, we approach each project with artistic vision and technical excellence.
              </p>
              <p>
                We believe that great photography is about more than just technical skill—it's about 
                understanding people, emotions, and moments. Our goal is to make you feel comfortable 
                and natural, allowing your true personality to shine through in every photograph.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 font-body">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional equipment and latest technology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Personalized approach to every client
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Quick turnaround and professional editing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Affordable packages for every budget
                </li>
              </ul>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="text-center p-6 shadow-studio border-border/50">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="font-body text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;