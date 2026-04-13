import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  Mail,
  Phone,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

function Card({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={cn("bg-white rounded-3xl border border-slate-200 shadow-sm", className)}>
      {children}
    </div>
  );
}

function Badge({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'success' | 'danger' | 'warning' }) {
  const variants = {
    default: "bg-slate-100 text-slate-800",
    success: "bg-[#E6F4EA] text-[#137333]",
    danger: "bg-[#FCE8E6] text-[#C5221F]",
    warning: "bg-[#FEF7E0] text-[#B06000]",
  };
  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider", variants[variant])}>
      {children}
    </span>
  );
}

// --- Main App ---

export default function App() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const mailtoConsult = "mailto:trustkarmallc@gmail.com?subject=Requesting%20a%20Free%20Consultation";

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-[#EA4335] rounded-full flex items-center justify-center shadow-sm">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 leading-none mt-1">TrustForge</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6">
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-[#4285F4] transition-colors">How It Works</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-[#4285F4] transition-colors">Pricing</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-[#4285F4] transition-colors">Contact</a>
              <a 
                href={mailtoConsult}
                className="text-sm font-medium bg-[#4285F4] text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors shadow-sm"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="px-6 py-20 sm:py-32 max-w-5xl mx-auto text-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="warning">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" /> Google Maps Reputation Service
              </span>
            </Badge>
            <h1 className="mt-8 text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stop Letting Bad Reviews <br className="hidden sm:block" />
              <span className="text-[#EA4335]">
                Cost You Customers
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              TrustForge audits your Google Business profile, disputes unfair feedback, and removes bad Google reviews to instantly improve your average rating.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={mailtoConsult}
                className="w-full sm:w-auto bg-[#4285F4] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                View Our Services
              </button>
            </div>
            <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-1.5 font-medium">
              We audit and remove your bad Google reviews—so you don't have to.
            </p>
          </motion.div>
        </section>

        {/* Problem / Solution Section */}
        <section id="how-it-works" className="py-24 bg-[#F8F9FA] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Your reputation is your most valuable asset.</h2>
              <p className="mt-4 text-lg text-slate-600">We help you clean up your profile and improve your ratings.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#FCE8E6] rounded-full flex items-center justify-center mb-6">
                  <AlertCircle className="w-7 h-7 text-[#EA4335]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Review Moderation</h3>
                <p className="text-slate-600 leading-relaxed">We actively audit your Google Maps reviews to identify unfair, fake, or policy-violating feedback that harms your business reputation.</p>
              </Card>
              <Card className="p-8 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#E8F0FE] rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-[#4285F4]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Disputes</h3>
                <p className="text-slate-600 leading-relaxed">We handle the complex process of flagging and disputing illegitimate reviews directly with Google to get them removed.</p>
              </Card>
              <Card className="p-8 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#E6F4EA] rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-[#34A853]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Improve Ratings</h3>
                <p className="text-slate-600 leading-relaxed">By successfully removing unfair, fake, and policy-violating negative reviews, your average star rating instantly increases.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple, transparent pricing</h2>
              <p className="mt-4 text-lg text-slate-600">Choose the level of support your business needs.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Tier 1: One-Time Audit */}
              <Card className="p-8 bg-white border-slate-200 flex flex-col mt-4 md:mt-0 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900">Review Audit</h3>
                <p className="text-slate-500 mt-2 text-sm">We analyze your Google Business profile to find exactly which bad reviews can be removed.</p>
                <div className="my-8">
                  <span className="text-5xl font-extrabold text-slate-900">$149</span>
                  <span className="text-slate-500 font-medium"> / one-time</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {[
                    'Full historical review analysis',
                    'Fake/Unfair review identification',
                    'Removal probability assessment',
                    'Action plan for disputes'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-[#34A853] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://www.paypal.com/ncp/payment/3E3EK6GYZ4JL6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-white border-2 border-[#4285F4] text-[#4285F4] hover:bg-blue-50 font-bold rounded-full text-center transition-colors"
                >
                  Buy Now ($149)
                </a>
              </Card>

              {/* Tier 2: Pay-Per-Removal */}
              <Card className="p-8 bg-white border-2 border-[#4285F4] relative flex flex-col shadow-xl shadow-blue-900/5 mt-8 md:mt-0">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4285F4] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md whitespace-nowrap">
                  Performance Based
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Pay-Per-Removal</h3>
                <p className="text-slate-500 mt-2 text-sm">You only pay when we successfully get a bad review removed.</p>
                <div className="my-8">
                  <span className="text-5xl font-extrabold text-slate-900">$199</span>
                  <span className="text-slate-500 font-medium"> / removed review</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {[
                    'No removal, no fee guarantee',
                    'Dedicated dispute filing per review',
                    'Google escalation & appeals',
                    'Dedicated account manager'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-[#4285F4] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://www.paypal.com/ncp/payment/LHATJT5XEURTL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-[#4285F4] hover:bg-blue-600 text-white font-bold rounded-full text-center transition-colors shadow-md shadow-blue-500/20"
                >
                  Buy Now ($199)
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 bg-[#F8F9FA] border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 border border-slate-100">
              <MapPin className="w-8 h-8 text-[#EA4335]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get Started with TrustForge</h2>
            <p className="text-xl text-slate-600 mb-10">Ready to clean up your Google Maps presence?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="mailto:trustkarmallc@gmail.com" className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-slate-200 hover:border-[#4285F4] hover:shadow-md transition-all w-full sm:w-auto">
                <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#4285F4]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email Us</p>
                  <p className="font-semibold text-slate-900">trustkarmallc@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+15127104997" className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-slate-200 hover:border-[#4285F4] hover:shadow-md transition-all w-full sm:w-auto">
                <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#4285F4]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Call Us</p>
                  <p className="font-semibold text-slate-900">+1 512-710-4997</p>
                </div>
              </a>
            </div>

            <p className="text-slate-600 mb-8 max-w-lg mx-auto">Or book a free consultation to see if our performance-based removal service is the right fit for your business.</p>
            <a 
              href={mailtoConsult}
              className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg shadow-blue-500/20"
            >
              Book a Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#EA4335]" />
              <span className="font-bold text-lg text-slate-900 tracking-tight">TrustForge</span>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              © {new Date().getFullYear()} TrustKarma LLC. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
