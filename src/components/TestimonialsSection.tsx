
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    text: string;
    avatar: string;
    project: string;
}

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Maria Silva",
            location: "Miami Beach",
            rating: 5,
            text: "Excellent work! The team was very professional and the result exceeded our expectations. The floors look beautiful and the installation was very quick.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?ixlib=rb-4.0.3&w=150",
            project: "Laminate Flooring - Living Room and Bedrooms"
        },
        {
            id: 2,
            name: "Carlos Rodriguez",
            location: "Aventura",
            rating: 5,
            text: "I recommend 100%! From the quote to the final delivery, everything was perfect. The quality of materials is exceptional and the price very fair.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150",
            project: "Premium Vinyl Flooring - Kitchen"
        },
        {
            id: 3,
            name: "Ana Santos",
            location: "Coral Gables",
            rating: 5,
            text: "They completely transformed our house! The service was exceptional and they met all deadlines. We are very satisfied with the result.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150",
            project: "Hardwood Flooring - Entire House"
        },
        {
            id: 4,
            name: "Roberto Lima",
            location: "Brickell",
            rating: 5,
            text: "Very competent and polite professionals. They did an impeccable job in my apartment. I highly recommend for anyone looking for quality!",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150",
            project: "Ceramic Flooring - Bathrooms"
        }
    ];

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, [nextTestimonial]);

    return (
        <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNNDAgNDBjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBzMjAgOC45NTQgMjAgMjAtOC45NTQgMjAtMjAgMjAtMjAtOC45NTQtMjAtMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Quote className="h-4 w-4 mr-2" />
                        Testimonials
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        What our customers say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our customers' satisfaction is our greatest achievement.
                        See testimonials from those who have already transformed their spaces with us.
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-gradient-to-br from-card to-card/50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                                <CardContent className="p-8 md:p-12">
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        {/* Avatar */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="flex-shrink-0"
                                        >
                                            <div className="relative">
                                                <img
                                                    src={testimonials[currentIndex].avatar}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                                                />
                                                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                                                    <Quote className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left">
                                            {/* Stars */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                className="flex justify-center md:justify-start mb-4"
                                            >
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </motion.div>

                                            {/* Testimonial Text */}
                                            <motion.blockquote
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                                className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic"
                                            >
                                                "{testimonials[currentIndex].text}"
                                            </motion.blockquote>

                                            {/* Client Info */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                            >
                                                <h4 className="font-bold text-foreground text-lg">
                                                    {testimonials[currentIndex].name}
                                                </h4>
                                                <p className="text-muted-foreground">
                                                    {testimonials[currentIndex].location}
                                                </p>
                                                <p className="text-primary text-sm font-medium mt-1">
                                                    {testimonials[currentIndex].project}
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={prevTestimonial}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={nextTestimonial}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Overall Rating */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4">
                        <div className="flex items-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="text-2xl font-bold text-foreground">5.0</div>
                            <div className="text-sm text-muted-foreground">500+ Reviews</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;