import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeNav, setActiveNav] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img 
            src="https://cdn.poehali.dev/files/6b7cec62-de51-40af-87c5-55a4e929d8c2.jpg" 
            alt="Yukon Ltd" 
            className="h-12"
          />
          <div className="hidden md:flex gap-8">
            {['about', 'services', 'benefits', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeNav === item ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {item === 'about' ? 'About Us' : item === 'services' ? 'Services' : item === 'benefits' ? 'Benefits' : 'Contact'}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {['about', 'services', 'benefits', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-sm font-semibold uppercase tracking-wide transition-colors text-foreground hover:text-primary py-2"
                >
                  {item === 'about' ? 'About Us' : item === 'services' ? 'Services' : item === 'benefits' ? 'Benefits' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#1e3a5f] to-[#2c5282] text-white">
        <div className="container mx-auto max-w-5xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Monobrand E-Commerce Distribution<br />for Ambitious Brands
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-light">
            We grow brands through a monobrand distribution model that gives customers the experience of buying directly from you — with the operational power of a professional partner behind the scenes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-3">
              <Icon name="Shield" className="text-secondary" size={24} />
              <span className="text-lg">We protect your identity</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="TrendingUp" className="text-secondary" size={24} />
              <span className="text-lg">We amplify your presence</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Zap" className="text-secondary" size={24} />
              <span className="text-lg">We scale your sales</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6"
            onClick={() => scrollToSection('contact')}
          >
            Let's Build Your Brand's Future
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-primary/10">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Icon name="Store" className="text-secondary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Monobrand Distribution</h3>
              <p className="text-muted-foreground leading-relaxed">
                We sell your products through brand-dedicated online ecosystems that replicate a true D2C feel across all major e-commerce platforms.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-primary/10">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Icon name="Network" className="text-secondary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Omnichannel Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                From e-commerce to wholesale and retail, we connect online and offline channels into one smooth, scalable strategy.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-primary/10">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Icon name="Users" className="text-secondary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Community-Driven Marketing</h3>
              <p className="text-muted-foreground leading-relaxed">
                With 15 years of digital expertise, we turn fans and influencers into an active brand community that drives sustainable growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Our Monobrand D2C Approach</h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ShoppingBag" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">Branded Storefronts Everywhere</h3>
                  <p className="text-lg text-muted-foreground mb-6">We build fully branded environments on:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Amazon</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Leading regional marketplaces</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Major retail partner sites</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-lg font-semibold text-primary">
                    Your products, your story, your identity — perfectly aligned with your global D2C presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">Brand-Level Customer Experience</h3>
                  <p className="text-lg text-muted-foreground mb-6">We ensure:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Perfect product presentation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Branded packaging</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Smooth delivery</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Customer service tailored to your standards</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-lg font-semibold text-primary">
                    Everything feels direct-from-brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="BarChart" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">Integrated Marketing & Smart Insights</h3>
                  <p className="text-lg text-muted-foreground mb-6">We collaborate with brands to:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Run unified marketing campaigns</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Share qualified customer and market data</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="Check" className="text-secondary" size={20} />
                      <span>Personalise experiences across all touchpoints</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-lg font-semibold text-primary">
                    You get the transparency of a D2C model — with outsourced execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Why Brands Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-colors">
              <Icon name="Shield" className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">We keep your brand intact</h3>
              <p className="text-white/90 text-lg">
                Your identity is never diluted — it is strengthened.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-colors">
              <Icon name="Heart" className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">We create real fan communities</h3>
              <p className="text-white/90 text-lg">
                Our marketing approach is built on engagement, loyalty, and relationships.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-colors">
              <Icon name="Rocket" className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">We scale fast and sustainably</h3>
              <p className="text-white/90 text-lg">
                Smart growth, clean operations, consistent representation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-colors">
              <Icon name="Award" className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">We work with brands that inspire loyalty</h3>
              <p className="text-white/90 text-lg">
                Your brand has fans — we know how to grow them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Let's Build Your Brand's Future</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            If you're planning market expansion, seeking a trusted e-commerce partner, or ready to scale your presence, we would love to talk.
          </p>
          <div className="bg-muted rounded-lg p-12">
            <div className="flex justify-center mb-8">
              <div className="flex items-start gap-4">
                <Icon name="Mail" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:ky@yukon.ltd.uk" className="text-muted-foreground hover:text-primary transition-colors">
                    ky@yukon.ltd.uk
                  </a>
                </div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8 py-6"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img 
              src="https://cdn.poehali.dev/files/6b7cec62-de51-40af-87c5-55a4e929d8c2.jpg" 
              alt="Yukon Ltd" 
              className="h-12"
            />
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Yukon Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;