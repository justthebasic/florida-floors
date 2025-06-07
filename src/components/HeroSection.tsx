import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Shield, Clock } from "lucide-react";

const HeroSection = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1vcGFjaXR5PSIwLjAzIiBmaWxsPSIjMDAwIj48cG9seWdvbiBwb2ludHM9IjUwIDAgNjAgNDAgMTAwIDUwIDYwIDYwIDUwIDEwMCA0MCA2MCA0MCA0MCI+PC9wb2x5Z29uPjwvZz48L3N2Zz4=')] opacity-20" />

            {/* Main Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />

            {/* Floating Elements */}
            <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
            />
            <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Trust Indicators */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
                        <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-3 text-sm text-foreground/80 font-medium">
                                5.0 • 500+ Satisfied Customers
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                Premium Flooring
                            </span>
                            <br />
                            <span className="text-primary relative">
                                for your Dream Home
                                <motion.div
                                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                />
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                    >
                        Transform your space with our expertise in flooring installation.
                        From hardwood to luxury vinyl, we deliver exceptional quality
                        and impeccable finishing throughout Florida.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300"
                                onClick={() => scrollToSection("contact")}
                            >
                                Free Estimate
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-lg px-8 py-6 border-2 border-primary/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                                onClick={() => scrollToSection("gallery")}
                            >
                                View Our Work
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center items-center gap-6 pt-8"
                    >
                        {[
                            { icon: Award, text: "Certified Company" },
                            { icon: Shield, text: "Full Warranty" },
                            { icon: Clock, text: "15+ Years Experience" }
                        ].map((badge, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                            >
                                <badge.icon className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-foreground/80">{badge.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16"
                    >
                        {[
                            { number: "15+", label: "Years of Experience", suffix: "" },
                            { number: "500+", label: "Completed Projects", suffix: "" },
                            { number: "50k+", label: "Sq Ft Installed", suffix: "" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="text-center group"
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                                >
                                    {stat.number}
                                </motion.div>
                                <p className="text-muted-foreground font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-primary rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;