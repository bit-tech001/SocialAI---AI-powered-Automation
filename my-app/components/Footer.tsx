import React from "react";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Sparkles, Shield, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Core Engine", href: "#" },
      { label: "Post Queue", href: "#" },
      { label: "Smart Analytics", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing Matrix", href: "#" },
    ],
    company: [
      { label: "About Agents", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Growth Blog", href: "#" },
      { label: "Brand Kit", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "System Status", href: "#" },
      { label: "Open Source", href: "#" },
    ],
    legal: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Protocol", href: "#" },
      { label: "OAuth Security", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        
        {/* Top Section: Brand & Newsletter Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-neutral-100 dark:border-neutral-900">
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd319] via-[#ff2975] to-[#8c1eff] p-0.5 shadow-md">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white dark:bg-black">
                  <Sparkles className="h-4 w-4 text-[#ff2975]" />
                </div>
              </div>
              <span className="text-xl font-black tracking-tight text-neutral-900 dark:text-white">
                Social.AI
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed font-medium">
              Autonomous multi-channel distribution grids. Orchestrating digital footprints instantly using serverless AI infrastructure.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
            <div className="space-y-1 sm:max-w-xs w-full">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Get Telemetry Updates</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Tactical social strategy drops, sent weekly.</p>
            </div>
            <form className="flex w-full max-w-md items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter workspace email"
                className="flex h-10 w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 px-3 py-2 text-sm ring-offset-background placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <RainbowButton className="h-10 px-4 text-xs font-semibold whitespace-nowrap">
                Subscribe
              </RainbowButton>
            </form>
          </div>
        </div>

        {/* Middle Section: Node Mapping Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600">Engine Core</h3>
            <ul className="mt-4 space-y-2.5">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600">Protocols</h3>
            <ul className="mt-4 space-y-2.5">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium flex items-center gap-1.5">
                    {link.label === "OAuth Security" && <Shield className="w-3.5 h-3.5 text-emerald-500" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Social Handlers */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-100 dark:border-neutral-900">
          <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-600 font-medium">
            <Terminal className="w-3.5 h-3.5" />
            <span>&copy; {currentYear} SocialAI Inc. All automated systems operational.</span>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-5">
            <Link href="#" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <span className="sr-only">Twitter / X</span>
           
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}