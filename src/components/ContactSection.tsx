import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@lensartstudio.com', 'bookings@lensartstudio.com'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Photography Street', 'Creative District, City 12345'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: By Appointment'],
    },
  ];

  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to book your photography session? Get in touch with us today and let's discuss 
            how we can capture your special moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, index) => (
                        <p key={index} className="font-body text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
              <h4 className="font-display font-semibold text-lg mb-3">Why Book With Us?</h4>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Custom packages available
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Professional editing included
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Fast delivery guarantee
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-studio-medium border-border/50">
            <CardHeader>
              <CardTitle className="font-display text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="font-body font-medium">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-body font-medium">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="font-body font-medium">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="font-body font-medium">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="service" className="font-body font-medium">Service Interested In</Label>
                  <select id="service" className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="engagement">Engagement Session</option>
                    <option value="bridal">Bridal Portrait</option>
                    <option value="groom">Groom Portrait</option>
                    <option value="pre-wedding">Pre-Wedding Shoot</option>
                    <option value="post-wedding">Post-Wedding Session</option>
                    <option value="portrait">Solo Portrait</option>
                    <option value="event">Special Event</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="date" className="font-body font-medium">Preferred Date</Label>
                  <Input id="date" type="date" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message" className="font-body font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your vision, location preferences, or any special requests..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;