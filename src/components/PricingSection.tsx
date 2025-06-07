
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PricingSection = () => {
    const { toast } = useToast();

    const plans = [
        {
            name: "Basic Package",
            price: "$3.99",
            period: "per sq ft",
            description: "Perfect for budget-conscious homeowners",
            features: [
                "Laminate flooring installation",
                "Basic underlayment included",
                "Standard transition strips",
                "1-year installation warranty",
                "Free basic trim work",
                "Material delivery included"
            ],
            buttonText: "Choose Basic",
            popular: false
        },
        {
            name: "Premium Package",
            price: "$6.99",
            period: "per sq ft",
            description: "Our most popular choice for quality and value",
            features: [
                "Luxury vinyl plank (LVP) installation",
                "Premium moisture barrier",
                "Custom transition work",
                "5-year installation warranty",
                "Quarter round and shoe molding",
                "Furniture moving assistance",
                "Subfloor preparation",
                "Professional cleanup"
            ],
            buttonText: "Choose Premium",
            popular: true
        },
        {
            name: "Luxury Package",
            price: "$12.99",
            period: "per sq ft",
            description: "Premium hardwood for luxury homes",
            features: [
                "Solid hardwood installation",
                "Premium grade materials",
                "Custom stain matching",
                "10-year installation warranty",
                "All custom trim work included",
                "Furniture moving & storage",
                "Complete subfloor renovation",
                "Dust containment system",
                "Premium finishing coats",
                "White glove service"
            ],
            buttonText: "Choose Luxury",
            popular: false
        }
    ];

    const handlePayment = (planName: string, price: string) => {
        // Simulate payment processing
        toast({
            title: "Payment Processing",
            description: `Processing payment for ${planName}. You'll be redirected to our secure payment portal.`,
        });

        // In a real application, this would integrate with Stripe or another payment processor
        console.log(`Processing payment for ${planName} at ${price}`);
    };

    return (
        <section id="pricing" className="py-20 bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Transparent Pricing Plans
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Choose the perfect package for your flooring project. All prices include materials,
                        labor, and our satisfaction guarantee. No hidden fees, ever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative transition-all duration-300 hover:shadow-xl ${plan.popular
                                    ? "border-primary shadow-lg scale-105"
                                    : "border-border hover:border-primary/50"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                                        <Star className="h-4 w-4 mr-1" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl font-bold text-foreground">
                                    {plan.name}
                                </CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                                </div>
                                <p className="text-muted-foreground mt-2">{plan.description}</p>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-sm text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className="w-full"
                                    variant={plan.popular ? "default" : "outline"}
                                    size="lg"
                                    onClick={() => handlePayment(plan.name, plan.price)}
                                >
                                    {plan.buttonText}
                                </Button>

                                <p className="text-xs text-muted-foreground text-center mt-3">
                                    Free estimate • No obligation • Licensed & insured
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mb-4">
                        Need a custom quote for your specific project?
                    </p>
                    <Button variant="outline" size="lg">
                        Request Custom Quote
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;