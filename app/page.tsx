import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <Mail className="h-6 w-6" />
            <span>SignatureCraft</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Create Professional Email Signatures in Minutes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Make a lasting impression with beautifully designed email signatures. Easy to create, customize, and manage.
            </p>
            <Link href="/login">
              <Button size="lg" className="gap-2">
                Try Now for Free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SignatureCraft?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-background rounded-lg shadow-sm">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Create professional signatures in minutes with our intuitive editor.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm">
                <Mail className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Multiple Signatures</h3>
                <p className="text-muted-foreground">
                  Create and manage multiple signatures for different purposes.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-muted-foreground">
                  Your data is always secure and available when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 border rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Free</h3>
                <p className="text-3xl font-bold mb-6">$0<span className="text-base font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Up to 3 signatures
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Basic templates
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Standard support
                  </li>
                </ul>
                <Link href="/login">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="p-8 border rounded-lg bg-primary text-primary-foreground">
                <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                <p className="text-3xl font-bold mb-6">$9<span className="text-base font-normal opacity-80">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Unlimited signatures
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Premium templates
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Priority support
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 SignatureCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}