import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
} from "react-icons/fi";

export default function Contact() {
  const [step, setStep] = useState(1);
  const steps = ["Contact", "Services", "Details", "Review"];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    otherService: "",
    experience: "",
    budget: "",
    message: "",
  });

  const toggleService = (val) => {
    setForm((f) => {
      const exists = f.services.includes(val);
      const services = exists
        ? f.services.filter((s) => s !== val)
        : [...f.services, val];
      return { ...f, services };
    });
  };

  const isStepValid = useMemo(() => {
    if (step === 1) {
      return form.name.trim() && form.email.trim();
    }
    if (step === 2) {
      const picked = form.services.length > 0;
      const needsOther =
        form.services.includes("Other") && form.otherService.trim() === "";
      return picked && !needsOther;
    }
    if (step === 3) {
      // Details are optional; allow proceed
      return true;
    }
    if (step === 4) return true;
    return false;
  }, [step, form]);

  const next = () => isStepValid && setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = (e) => {
    e.preventDefault();
    // TODO: wire up EmailJS or backend here
    alert("Thanks! Your inquiry has been captured.");
  };

  const fade = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen bg-white dark:bg-[#050505] dark:text-gray-100 transition-colors duration-700 flex"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="video/home.mp4" type="video/mp4" />
      </video>

      {/* Overlay for both themes */}
      <div className="absolute inset-0 z-[1] bg-white/70 dark:bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent"
        >
          Let’s Work Together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl"
        >
          Whether you need a quotation, a new website, ads, PC repair/build, or a
          one-on-one programming tutorial. Tell me what you need and we’ll make
          it happen. If I did not reply to your inquiry within 5 hours, please contact me via phone and email.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Quick Contact (Your contact details) */}
          <div className="lg:col-span-1 space-y-4">
            {[
              {
                icon: <FiMail />,
                title: "Email",
                value: "gaculacenon@icloud.com",
                href: "mailto:gaculacenon@icloud.com",
              },
              {
                icon: <FiPhone />,
                title: "Phone",
                value: "+63 991 048 7896",
                href: "tel:+639910487896",
              },
              {
                icon: <FiMapPin />,
                title: "Location",
                value: "San Mateo, Philippines",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href || "#"}
                className="block p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-[#0d0d0d]/70 hover:border-cyan-400 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-blue-600 dark:text-cyan-400 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-400">
                      {item.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Wizard */}
          <div className="lg:col-span-2">
            {/* Stepper */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                {steps.map((label, idx) => {
                  const index = idx + 1;
                  const active = step >= index;
                  return (
                    <div key={label} className="flex-1 flex items-center">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                          ${
                            active
                              ? "bg-cyan-500 text-white"
                              : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {active && step > index ? <FiCheck /> : index}
                        </div>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {label}
                        </span>
                      </div>
                      {index !== steps.length && (
                        <div
                          className={`h-[2px] flex-1 mx-3 ${
                            step > index
                              ? "bg-cyan-500"
                              : "bg-gray-300 dark:bg-gray-700"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Card */}
            <form
              onSubmit={submit}
              className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-100/80 dark:bg-[#0d0d0d]/70 backdrop-blur-md shadow-md"
            >
              {/* Steps */}
              <motion.div
                key={step}
                variants={fade}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                {/* STEP 1: Contact */}
                {step === 1 && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none text-gray-900 dark:text-gray-100"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Your Email *"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none text-gray-900 dark:text-gray-100"
                        required
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none text-gray-900 dark:text-gray-100"
                    />
                  </>
                )}

                {/* STEP 2: Services */}
                {step === 2 && (
                  <>
                    <p className="font-semibold">What service do you need?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Website / Application",
                        "Online Ads / SEO",
                        "PC Repair",
                        "PC Build",
                        "Automation / AI Integration",
                        "Programming Tutorial",
                        "Other",
                      ].map((opt) => (
                        <label key={opt} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="accent-cyan-500"
                            checked={form.services.includes(opt)}
                            onChange={() => toggleService(opt)}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>

                    {form.services.includes("Other") && (
                      <input
                        type="text"
                        placeholder="Please specify the service"
                        value={form.otherService}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, otherService: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none text-gray-900 dark:text-gray-100"
                      />
                    )}
                  </>
                )}

                {/* STEP 3: Details */}
                {step === 3 && (
                  <>
                    <div>
                      <p className="font-semibold mb-3">
                        How long has your business been running?
                      </p>
                      <div className="space-y-2">
                        {["0–2 years", "2–5 years", "5+ years"].map((opt) => (
                          <label key={opt} className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="experience"
                              className="accent-cyan-500"
                              checked={form.experience === opt}
                              onChange={() =>
                                setForm((f) => ({ ...f, experience: opt }))
                              }
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-3">
                        What is your estimated project budget?
                      </p>
                      <div className="space-y-2">
                        {[
                          "Below ₱10,000",
                          "₱10,000 – ₱50,000",
                          "₱50,000 – ₱100,000",
                          "₱100,000+",
                        ].map((opt) => (
                          <label key={opt} className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="budget"
                              className="accent-cyan-500"
                              checked={form.budget === opt}
                              onChange={() =>
                                setForm((f) => ({ ...f, budget: opt }))
                              }
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <textarea
                      rows="5"
                      placeholder="Tell me more about your project or needs..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none text-gray-900 dark:text-gray-100 resize-none"
                    />
                  </>
                )}

                {/* STEP 4: Review */}
                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Review your details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <ReviewItem label="Name" value={form.name || "—"} />
                      <ReviewItem label="Email" value={form.email || "—"} />
                      <ReviewItem label="Phone" value={form.phone || "—"} />
                      <ReviewItem
                        label="Services"
                        value={
                          form.services
                            .map((s) =>
                              s === "Other" && form.otherService
                                ? `Other (${form.otherService})`
                                : s
                            )
                            .join(", ") || "—"
                        }
                      />
                      <ReviewItem
                        label="Experience"
                        value={form.experience || "—"}
                      />
                      <ReviewItem label="Budget" value={form.budget || "—"} />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Message</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {form.message || "—"}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Footer Buttons */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 1}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-sm font-semibold transition
                    ${
                      step === 1
                        ? "opacity-50 cursor-not-allowed border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                        : "border-gray-300 dark:border-gray-700 hover:border-cyan-500"
                    }`}
                >
                  <FiArrowLeft /> Back
                </button>

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={next}
                    disabled={!isStepValid}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition
                      ${
                        isStepValid
                          ? "bg-cyan-500 hover:bg-cyan-600"
                          : "bg-gray-400 dark:bg-gray-700 cursor-not-allowed"
                      }`}
                  >
                    Next <FiArrowRight />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
                  >
                    Submit <FiSend />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-[#0d0d0d]/70">
      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  );
}
