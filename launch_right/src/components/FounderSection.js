"use client";

import { motion } from "framer-motion";
import { 
  UserCircleIcon, 
  CheckBadgeIcon, 
  SparklesIcon,
  ScaleIcon,
  CommandLineIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/outline";

export default function FounderSection() {
  return (
    <section id="founder" className="section-pad bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-72 h-80 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="text-center p-6">
                    <div className="w-40 h-40 mx-auto bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <UserCircleIcon className="w-20 h-20 text-gold/50" />
                    </div>
                    <p className="text-gold/60 text-sm">Add Photo</p>
                    <p className="text-gold/40 text-xs mt-1">Professional headshot</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2">
                  <CheckBadgeIcon className="w-4 h-4" />
                  CAC Accredited
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left flex-1"
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
                <SparklesIcon className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm font-medium">Meet the Founder</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Lukman Abdulsalam
              </h2>
              <p className="text-gold font-medium text-lg mb-1">
                Founder, JurisTech
              </p>
              <p className="text-gray-400 text-sm mb-8">
                Lawyer · CAC-Accredited Agent · Software Engineer
              </p>

              <div className="space-y-5 text-gray-300 leading-relaxed mb-8">
                <p>
                  JurisTech exists because I kept watching hardworking Nigerian entrepreneurs get shortchanged — by ghost agents who disappeared after collecting money, by lawyers who charged ₦200,000 for a simple contract, and by web developers who built sites with no understanding of the business behind them.
                </p>
                <p>
                  I am a Nigerian lawyer, an accredited CAC agent, and the developer who built JurisTech from scratch. That combination is not common — and it means every client who works with us gets legal accuracy, regulatory compliance, and technical execution from someone who understands all three.
                </p>
                <p>
                  Every registration, every website, every document that leaves JurisTech meets a standard I am personally willing to put my name on.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gold text-3xl font-serif italic opacity-80">
                  — Lukman
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckBadgeIcon className="w-4 h-4 text-success" />
                  Nigerian Bar Association Member
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckBadgeIcon className="w-4 h-4 text-success" />
                  CAC-Accredited Agent
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckBadgeIcon className="w-4 h-4 text-success" />
                  Founder & Lead Developer, JurisTech
                </div>
              </div>

              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="inline-flex items-center justify-center gap-2 text-gold hover:text-yellow-400 transition-colors font-medium"
              >
                Have questions? Talk to me directly →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
