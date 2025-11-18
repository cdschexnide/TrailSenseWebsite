import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pb-32">
        <div className="max-w-2xl lg:max-w-lg">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 ring-1 ring-inset ring-primary-600/20">
            <span>Next-Generation Security</span>
          </div> */}

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-earth-900 sm:text-6xl text-balance">
            Property Security Through Passive Device Detection
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-earth-600">
            Monitor vast properties with advanced multi-band wireless detection.
            TrailSense devices passively scan for cellular, WiFi, and Bluetooth
            signals across 500-800+ feet, alerting you to unauthorized presence
            in real-time.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-x-6">
            <Button asChild size="xl">
              <Link href="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/product">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-earth-200 pt-10">
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-primary-600">800+ ft</p>
              <p className="text-xs sm:text-sm text-earth-600">Detection Range</p>
            </div>
            <div className="text-center border-x border-earth-300 px-2">
              <p className="text-2xl sm:text-3xl font-bold text-primary-600">24/7</p>
              <p className="text-xs sm:text-sm text-earth-600">Autonomous Operation</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-primary-600">3-Band</p>
              <p className="text-xs sm:text-sm text-earth-600">Detection System</p>
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex lg:items-center">
          <div className="w-full">
            <div className="rounded-2xl bg-earth-900/5 p-2 ring-1 ring-inset ring-earth-900/10 lg:rounded-2xl lg:p-4">
              {/* Placeholder for device image */}
              <div className="aspect-[16/10] w-full rounded-md bg-gradient-to-br from-primary-600 to-sage-700 shadow-2xl ring-1 ring-earth-900/10 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-2xl font-bold mb-2">
                    TrailSense Detection Unit
                  </p>
                  <p className="text-sm opacity-80">
                    Product image placeholder
                  </p>
                  <p className="text-xs opacity-60 mt-4 max-w-md">
                    Replace this with high-quality product photography showing
                    the device in an outdoor deployment scenario
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-400 to-sage-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
