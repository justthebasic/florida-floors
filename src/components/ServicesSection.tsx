
import { Card, CardContent } from "@/components/ui/card";
import { Home, Layers, Wrench, Shield } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            icon: Home,
            title: "Hardwood Flooring",
            description: "Premium hardwood installation with expert craftsmanship. Choose from oak, maple, cherry, and exotic woods.",
            features: ["Solid & Engineered", "Refinishing", "Repairs", "Custom Stains"]
        },
        {
            icon: Layers,
            title: "Luxury Vinyl Plank",
            description: "Waterproof and durable LVP flooring perfect for Florida's climate. Looks like real wood.",
            features: ["100% Waterproof", "Pet-Friendly", "Easy Maintenance", "Realistic Textures"]
        },
        {
            icon: Wrench,
            title: "Tile & Stone",
            description: "Beautiful ceramic, porcelain, and natural stone installations for kitchens, bathrooms, and more.",
            features: ["Ceramic & Porcelain", "Natural Stone", "Mosaic Designs", "Heated Floors"]
        },
        {
            icon: Shield,
            title: "Laminate Flooring",
            description: "Affordable and stylish laminate options that resist scratches and fading.",
            features: ["Scratch Resistant", "Fade Proof", "Easy Installation", "Wide Selection"]
        }
    ];

    return (
        <section id="services" className="py-20 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Flooring Services
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We specialize in premium flooring solutions tailored to Florida homes and businesses.
                        Quality materials, expert installation, and unmatched service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/60 backdrop-blur">
                            <CardContent className="p-6">
                                <div className="mb-4">
                                    <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;