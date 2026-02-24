import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Maintenance = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
            <div className="w-full max-w-md text-center bg-gray-900 rounded-2xl p-8 shadow-2xl">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-yellow-500/10 rounded-full animate-bounce">
                        <AlertTriangle className="h-10 w-10 text-yellow-400" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-semibold text-white">
                    Site Under Maintenance
                </h1>

                {/* Description */}
                <p className="mt-4 text-gray-400 text-sm md:text-base">
                    We’re currently improving this page.
                    Please check back soon.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <Link href="/">
                        <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition">
                            Back to Homepage
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Maintenance;