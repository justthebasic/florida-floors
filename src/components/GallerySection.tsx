import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Filter, ZoomIn, MapPin, Ruler } from "lucide-react";

interface GalleryImage {
    id: number;
    url: string;
    title: string;
    category: string;
    size: 'small' | 'medium' | 'large';
    area: string;
    location: string;
    projectImages?: string[];
    isHighlight?: boolean;
}

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const categories = [
        { id: "all", name: "All Projects" },
        { id: "hardwood", name: "Hardwood Floors" },
        { id: "vinyl", name: "Vinyl" },
        { id: "laminate", name: "Laminate" },
        { id: "ceramic", name: "Ceramic" }
    ];

    const galleryImages: GalleryImage[] = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800",
            title: "Modern Living Room",
            category: "hardwood",
            size: "large",
            area: "85m²",
            location: "Miami Beach",
            isHighlight: true,
            projectImages: [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800",
                "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&w=800"
            ]
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&w=600",
            title: "Gourmet Kitchen",
            category: "ceramic",
            size: "medium",
            area: "45m²",
            location: "Aventura"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&w=400",
            title: "Luxury Bathroom",
            category: "ceramic",
            size: "small",
            area: "12m²",
            location: "Coral Gables"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1562113693-57ba467cea38?ixlib=rb-4.0.3&w=600",
            title: "Master Bedroom",
            category: "vinyl",
            size: "medium",
            area: "32m²",
            location: "Brickell",
            isHighlight: true
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&w=800",
            title: "Corporate Office",
            category: "laminate",
            size: "large",
            area: "120m²",
            location: "Downtown Miami"
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&w=400",
            title: "Outdoor Area",
            category: "vinyl",
            size: "small",
            area: "28m²",
            location: "Key Biscayne"
        },
        {
            id: 7,
            url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&w=600",
            title: "Integrated Living",
            category: "hardwood",
            size: "medium",
            area: "65m²",
            location: "South Beach"
        },
        {
            id: 8,
            url: "https://images.unsplash.com/photo-1615800001234-92e5a6a0f1c2?ixlib=rb-4.0.3&w=400",
            title: "Entrance Hall",
            category: "ceramic",
            size: "small",
            area: "18m²",
            location: "Pinecrest"
        }
    ];

    const filteredImages = selectedCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const highlightImages = galleryImages.filter(img => img.isHighlight);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const openLightbox = (image: GalleryImage) => {
        setSelectedImage(image);
        setCurrentImageIndex(0);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (!selectedImage?.projectImages) return;

        const maxIndex = selectedImage.projectImages.length - 1;
        if (direction === 'prev') {
            setCurrentImageIndex(prev => prev > 0 ? prev - 1 : maxIndex);
        } else {
            setCurrentImageIndex(prev => prev < maxIndex ? prev + 1 : 0);
        }
    };

    const getSizeClass = (size: string) => {
        switch (size) {
            case 'large': return 'md:col-span-2 md:row-span-2';
            case 'medium': return 'md:col-span-1 md:row-span-2';
            default: return 'md:col-span-1 md:row-span-1';
        }
    };

    if (isLoading) {
        return (
            <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-pulse">
                        <div className="h-8 bg-muted rounded-lg w-64 mx-auto mb-4"></div>
                        <div className="h-4 bg-muted rounded w-96 mx-auto mb-16"></div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="h-48 bg-muted rounded-lg"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="gallery" className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzAgMzBjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBzMjAgOC45NTQgMjAgMjAtOC45NTQgMjAtMjAgMjAtMjAtOC45NTQtMjAtMjB6bTAgMGMwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMFMtMTAgOC45NTQtMTAgMjBzOC45NTQgMjAgMjAgMjAgMjAtOC45NTQgMjAtMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <ZoomIn className="h-4 w-4 mr-2" />
                        Project Gallery
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        Our Completed Projects
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Explore our collection of spectacular transformations. Each project
                        represents our dedication to excellence and attention to detail.
                    </p>
                </motion.div>

                {/* Highlights Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                        Featured Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {highlightImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                                onClick={() => openLightbox(image)}
                            >
                                <Card className="overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                                    <CardContent className="p-0">
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={image.url}
                                                alt={image.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <ZoomIn className="h-4 w-4 text-white" />
                                            </div>
                                            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <h4 className="font-semibold text-lg">{image.title}</h4>
                                                <div className="flex items-center gap-4 text-sm opacity-90">
                                                    <span className="flex items-center gap-1">
                                                        <Ruler className="h-3 w-3" />
                                                        {image.area}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" />
                                                        {image.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category.id)}
                            className="rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
                        >
                            <Filter className="h-4 w-4 mr-2" />
                            {category.name}
                        </Button>
                    ))}
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
                >
                    <AnimatePresence>
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`group cursor-pointer ${getSizeClass(image.size)}`}
                                onClick={() => openLightbox(image)}
                            >
                                <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                    <CardContent className="p-0 h-full">
                                        <div className="relative h-full overflow-hidden">
                                            <img
                                                src={image.url}
                                                alt={image.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <ZoomIn className="h-4 w-4 text-white" />
                                            </div>
                                            <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <h4 className="font-semibold text-sm md:text-base">{image.title}</h4>
                                                <div className="flex items-center gap-2 text-xs md:text-sm opacity-90">
                                                    <span className="flex items-center gap-1">
                                                        <Ruler className="h-3 w-3" />
                                                        {image.area}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Statistics Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {[
                        { number: "500+", label: "Completed Projects" },
                        { number: "15+", label: "Years of Experience" },
                        { number: "100%", label: "Satisfaction Guaranteed" },
                        { number: "50k+", label: "Sq Ft Installed" }
                    ].map((stat, index) => (
                        <div key={index} className="group">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                            >
                                {stat.number}
                            </motion.div>
                            <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="relative max-w-5xl max-h-[90vh] w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute top-4 right-4 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>

                                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                                    <div className="relative">
                                        <img
                                            src={selectedImage.projectImages?.[currentImageIndex] || selectedImage.url}
                                            alt={selectedImage.title}
                                            className="w-full h-[60vh] object-cover"
                                        />

                                        {selectedImage.projectImages && selectedImage.projectImages.length > 1 && (
                                            <>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70"
                                                    onClick={() => navigateImage('prev')}
                                                >
                                                    <ChevronLeft className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70"
                                                    onClick={() => navigateImage('next')}
                                                >
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            </>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-foreground mb-4">{selectedImage.title}</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Ruler className="h-4 w-4" />
                                                <span>Area: {selectedImage.area}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                <span>Location: {selectedImage.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Filter className="h-4 w-4" />
                                                <span>Category: {categories.find(c => c.id === selectedImage.category)?.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GallerySection;