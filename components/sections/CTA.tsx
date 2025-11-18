import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <div className="bg-gradient-to-br from-primary-600 to-sage-700">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to secure your property?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
            Get a custom quote based on your property size and monitoring needs.
            Our team will help design the optimal deployment strategy for
            maximum coverage.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="xl" variant="secondary">
              <Link href="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/product">View Product Details</Link>
            </Button>
          </div>
          {/* <div className="mt-10 flex items-center justify-center gap-x-8 text-primary-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">$250-350</p>
              <p className="text-sm">Per unit target pricing</p>
            </div>
            <div className="h-12 w-px bg-primary-400" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">$0</p>
              <p className="text-sm">Monthly subscription fees</p>
            </div>
            <div className="h-12 w-px bg-primary-400" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">~$10</p>
              <p className="text-sm">LTE data plan (optional)</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
