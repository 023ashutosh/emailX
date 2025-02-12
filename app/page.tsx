import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Shield, Zap, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <Mail className="h-6 w-6 text-secondary" />
            <span className="gradient-text">SignatureCraft</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hover:text-secondary">Login</Button>
            </Link>
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 text-white neon-glow">Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold mb-6 gradient-text neon-glow">
                  Create Professional Email Signatures in Minutes
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Make a lasting impression with beautifully designed email signatures. Easy to create, customize, and manage.
                </p>
                <Link href="/login">
                  <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-white neon-glow">
                    Try Now for Free <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="dashboard-mockup p-6">
                <Image
                  src="https://placehold.co/800x600/1a1a1a/purple?text=Dashboard+Preview"
                  alt="SignatureCraft Dashboard"
                  width={800}
                  height={600}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Why Choose SignatureCraft?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg cyber-card neon-border">
                <Zap className="h-12 w-12 mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Create professional signatures in minutes with our intuitive editor.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg cyber-card neon-border">
                <Mail className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-primary">Multiple Signatures</h3>
                <p className="text-muted-foreground">
                  Create and manage multiple signatures for different purposes.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg cyber-card neon-border">
                <Shield className="h-12 w-12 mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Secure & Reliable</h3>
                <p className="text-muted-foreground">
                  Your data is always secure and available when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Marketing Director",
                  content: "SignatureCraft has transformed how our team manages email signatures. The customization options are incredible!",
                  rating: 5
                },
                {
                  name: "David Chen",
                  role: "Tech Entrepreneur",
                  content: "The best email signature tool I've used. Clean interface, great templates, and excellent support.",
                  rating: 5
                },
                {
                  name: "Emma Williams",
                  role: "Sales Manager",
                  content: "Our team's email signatures now look more professional than ever. Highly recommended!",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-6 bg-card rounded-lg cyber-card neon-border">
                  <div className="flex gap-1 text-secondary mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 border border-muted rounded-lg cyber-card neon-border">
                <h3 className="text-2xl font-semibold mb-2 text-secondary">Free</h3>
                <p className="text-3xl font-bold mb-6">$0<span className="text-base font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    Up to 3 signatures
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    Basic templates
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    Standard support
                  </li>
                </ul>
                <Link href="/login">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Get Started</Button>
                </Link>
              </div>
              <div className="p-8 border-2 border-primary rounded-lg bg-card cyber-card neon-border">
                <h3 className="text-2xl font-semibold mb-2 text-primary">Pro</h3>
                <p className="text-3xl font-bold mb-6">$9<span className="text-base font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Unlimited signatures
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Premium templates
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white neon-glow">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-semibold text-xl mb-4">
                <Mail className="h-6 w-6 text-secondary" />
                <span className="gradient-text">SignatureCraft</span>
              </div>
              <p className="text-muted-foreground">
                Create beautiful, professional email signatures in minutes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">Features</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">Pricing</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">About</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">Privacy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">Terms</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-secondary">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-muted mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SignatureCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}