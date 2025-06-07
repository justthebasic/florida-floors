
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get Your Free Estimate Today
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to transform your space? Contact us for a free, no-obligation estimate.
                        Our experts are standing by to help you choose the perfect flooring solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <Card className="border-0 bg-secondary/20">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-semibold text-foreground mb-6">
                                    Send Us a Message
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="bg-background"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="bg-background"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            name="message"
                                            placeholder="Tell us about your flooring project..."
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full">
                                        Get Free Estimate
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Phone</h4>
                                        <p className="text-muted-foreground">(305) 123-4567</p>
                                        <p className="text-sm text-muted-foreground">Free estimates available</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Email</h4>
                                        <p className="text-muted-foreground">info@floridafloorspro.com</p>
                                        <p className="text-sm text-muted-foreground">24-hour response guaranteed</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Service Area</h4>
                                        <p className="text-muted-foreground">Miami, Fort Lauderdale, West Palm Beach</p>
                                        <p className="text-sm text-muted-foreground">Serving all of South Florida</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Clock className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Business Hours</h4>
                                        <p className="text-muted-foreground">Mon-Fri: 7:00 AM - 6:00 PM</p>
                                        <p className="text-muted-foreground">Sat: 8:00 AM - 4:00 PM</p>
                                        <p className="text-sm text-muted-foreground">Emergency service available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="border-0 bg-primary/5">
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-foreground mb-4">Why Choose Us?</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Licensed & insured professionals</li>
                                    <li>• 15+ years of experience in Florida</li>
                                    <li>• Free estimates with no hidden fees</li>
                                    <li>• Premium materials from trusted brands</li>
                                    <li>• Satisfaction guarantee on all work</li>
                                    <li>• Financing options available</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;