import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-primary">FloridaFloors Pro</h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary px-3 py-2 transition-colors">
                                Home
                            </button>
                            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary px-3 py-2 transition-colors">
                                Services
                            </button>
                            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-primary px-3 py-2 transition-colors">
                                Gallery
                            </button>
                            <button onClick={() => scrollToSection("pricing")} className="text-foreground hover:text-primary px-3 py-2 transition-colors">
                                Pricing
                            </button>
                            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary px-3 py-2 transition-colors">
                                Contact
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Phone className="h-4 w-4 mr-2" />
                            (305) 123-4567
                        </div>
                        <Button onClick={() => scrollToSection("contact")}>
                            Get Quote
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
                            <button onClick={() => scrollToSection("home")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                                Home
                            </button>
                            <button onClick={() => scrollToSection("services")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                                Services
                            </button>
                            <button onClick={() => scrollToSection("gallery")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                                Gallery
                            </button>
                            <button onClick={() => scrollToSection("pricing")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                                Pricing
                            </button>
                            <button onClick={() => scrollToSection("contact")} className="block px-3 py-2 text-foreground hover:text-primary w-full text-left">
                                Contact
                            </button>
                            <div className="px-3 py-2">
                                <Button onClick={() => scrollToSection("contact")} className="w-full">
                                    Get Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;