
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">FloridaFloors Pro</h3>
                        <p className="text-primary-foreground/80 mb-4 max-w-md">
                            Your trusted partner for premium flooring solutions in Florida.
                            We transform homes and businesses with quality craftsmanship and exceptional service.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="h-6 w-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
                            <Instagram className="h-6 w-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
                            <Twitter className="h-6 w-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-primary-foreground/80">
                            <li>Hardwood Installation</li>
                            <li>Luxury Vinyl Plank</li>
                            <li>Tile & Stone</li>
                            <li>Laminate Flooring</li>
                            <li>Floor Refinishing</li>
                            <li>Commercial Flooring</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-primary-foreground/80">
                            <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-2" />
                                <span>(305) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                <span>info@floridafloorspro.com</span>
                            </div>
                            <p className="text-sm">
                                Serving Miami-Dade, Broward, and Palm Beach Counties
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
                    <p>&copy; 2025 FloridaFloors Pro. All rights reserved. Licensed & Insured.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;