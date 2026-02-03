import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    content: "+91-6353329493",
    link: "tel:+916353329493",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Mail,
    title: "Email",
    content: "truviapolyplast@gmail.com",
    link: "mailto:truviapolyplast@gmail.com",
    gradient: "from-secondary to-accent",
  },
  {
    icon: MapPin,
    title: "Office Address",
    content: "Godown no. 13, Vandemantaram-3, Singarava Road, Opp. VR Estate, Kathwada, Ahmedabad, Gujarat 382430",
    link: null,
    gradient: "from-accent to-primary",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon – Sat: 9:00 AM – 6:00 PM",
    link: null,
    gradient: "from-primary via-secondary to-accent",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with us for inquiries, orders, or any questions about our products
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to help and answer any question you might have. 
              We look forward to hearing from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50 hover:border-primary/30"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon container with animated gradient border */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <card.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Decorative circle */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${card.gradient} opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                
                {card.link ? (
                  <a
                    href={card.link}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 block leading-relaxed"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    {card.content}
                  </p>
                )}

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Contact us today and let's discuss how we can help you with premium quality PTMT products.
          </p>
          <a
            href="tel:+916353329493"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
