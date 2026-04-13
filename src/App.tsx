import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Check,
  Mail,
  Phone,
  TrendingUp,
  MessageSquare,
  Clock
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

function Card({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={cn("bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", className)}>
      {children}
    </div>
  );
}

function Badge({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'success' | 'danger' | 'warning' }) {
  const variants = {
    default: "bg-slate-100 text-slate-800",
    success: "bg-emerald-100 text-emerald-800",
    danger: "bg-rose-100 text-rose-800",
    warning: "bg-amber-100 text-amber-800",
  };
  return (
    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", variants[variant])}>
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
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 leading-none mt-1">TrustForge</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6">
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-900">How It Works</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-900">Pricing</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-900">Contact</a>
              <a 
                href={mailtoConsult}
                className="text-sm font-medium bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="px-6 py-20 sm:py-32 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="warning">
              <span className="flex items-center gap-1 text-amber-800">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> Done-For-You Reputation Service
              </span>
            </Badge>
            <h1 className="mt-6 text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stop Letting Bad Reviews <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
                Cost You Customers
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              TrustForge monitors your reviews, alerts you instantly, and helps you respond in a way that builds trust and boosts ratings.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={mailtoConsult}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                View Our Services
              </button>
            </div>
            <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-1.5 font-medium">
              We monitor, manage, and improve your reviews—so you don't have to.
            </p>
          </motion.div>
        </section>

        {/* Problem / Solution Section */}
        <section id="how-it-works" className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Your reputation is your most valuable asset.</h2>
              <p className="mt-4 text-lg text-slate-600">We help you respond better and improve your ratings over time.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-none shadow-md bg-slate-50">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Real-Time Monitoring</h3>
                <p className="text-slate-600">We track your reviews across the web. When a new review comes in, we know instantly so you're never caught off guard.</p>
              </Card>
              <Card className="p-8 border-none shadow-md bg-slate-50">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Smarter Responses</h3>
                <p className="text-slate-600">We provide custom, professional response suggestions that de-escalate negative feedback and highlight the positive.</p>
              </Card>
              <Card className="p-8 border-none shadow-md bg-slate-50">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Improve Ratings</h3>
                <p className="text-slate-600">By consistently engaging with customers and resolving issues, we help you build trust that naturally drives higher ratings.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
              <p className="mt-4 text-lg text-slate-400">Choose the level of support your business needs.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Tier 1: One-Time */}
              <Card className="p-8 bg-slate-800 border-slate-700 text-white flex flex-col">
                <h3 className="text-2xl font-bold text-white">Review Audit</h3>
                <p className="text-slate-400 mt-2 text-sm">Perfect for a quick reputation cleanup and baseline analysis.</p>
                <div className="my-6">
                  <span className="text-5xl font-extrabold text-white">$149</span>
                  <span className="text-slate-400 font-medium"> / one-time</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'Full historical review analysis',
                    'Sentiment breakdown',
                    'Key issues identified',
                    'Custom response templates',
                    'Action plan to improve rating'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="mailto:trustkarmallc@gmail.com?subject=Inquiry:%20One-Time%20Review%20Audit"
                  className="block w-full py-3 px-6 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl text-center transition-colors"
                >
                  Request Audit
                </a>
              </Card>

              {/* Tier 2: Growth (Main) */}
              <Card className="p-8 bg-blue-900 border-blue-800 text-white relative flex flex-col transform lg:-translate-y-4 shadow-2xl shadow-blue-900/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white">Growth Monitoring</h3>
                <p className="text-blue-200 mt-2 text-sm">Real-time tracking and strategy to actively improve your reputation.</p>
                <div className="my-6">
                  <span className="text-5xl font-extrabold text-white">$99</span>
                  <span className="text-blue-200 font-medium"> / month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'Real-time review monitoring',
                    'Negative review alerts',
                    'Custom response suggestions',
                    'Reputation improvement strategy',
                    'Monthly performance report'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-blue-100">
                      <Check className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="mailto:trustkarmallc@gmail.com?subject=Inquiry:%20Growth%20Monitoring%20Plan"
                  className="block w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-center transition-colors shadow-lg shadow-orange-500/20"
                >
                  Get Started
                </a>
              </Card>

              {/* Tier 3: Pro */}
              <Card className="p-8 bg-slate-800 border-slate-700 text-white flex flex-col">
                <h3 className="text-2xl font-bold text-white">Pro Management</h3>
                <p className="text-slate-400 mt-2 text-sm">Completely done-for-you review management and priority support.</p>
                <div className="my-6">
                  <span className="text-5xl font-extrabold text-white">$199</span>
                  <span className="text-slate-400 font-medium"> / month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'Everything in Growth',
                    'Done-for-you responses',
                    'Multi-location support',
                    'Priority email & phone support',
                    'Quarterly strategy calls'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="mailto:trustkarmallc@gmail.com?subject=Inquiry:%20Pro%20Management%20Plan"
                  className="block w-full py-3 px-6 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl text-center transition-colors"
                >
                  Contact Sales
                </a>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">Just need basic tracking? Ask about our $49/mo Starter plan.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 bg-blue-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-900" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get Started with TrustForge</h2>
            <p className="text-xl text-slate-600 mb-10">Ready to take control of your online reputation?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="mailto:trustkarmallc@gmail.com" className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors w-full sm:w-auto">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-900" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Us</p>
                  <p className="font-medium text-slate-900">trustkarmallc@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+15127104997" className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors w-full sm:w-auto">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Call Us</p>
                  <p className="font-medium text-slate-900">+1 512-710-4997</p>
                </div>
              </a>
            </div>

            <p className="text-slate-600 mb-6">Or book a free consultation and we'll discuss exactly how to improve your ratings.</p>
            <a 
              href={mailtoConsult}
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-blue-900/20"
            >
              Book a Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              <span className="font-bold text-lg text-slate-900 tracking-tight">TrustForge</span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} TrustKarma LLC. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
