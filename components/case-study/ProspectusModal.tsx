"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ProspectusModal({
  open,
  onClose,
  fileUrl = "/PitchUp_Prospectus.pdf",
}: {
  open: boolean;
  onClose: () => void;
  fileUrl?: string;
}) {
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);

    // trigger download 
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "PitchUp_Prospectus.pdf";
    a.click();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* card */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 210, damping: 22 }}
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-neutral-900"
          >
            <h2 className="mb-6 text-center text-xl font-semibold">
              Download the prospectus
            </h2>

            {done ? (
              <p className="py-8 text-center text-green-600">
                Thank you! Your download should start automatically.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  name="name"
                  placeholder="Name"
                  className="w-full rounded border px-4 py-2 text-sm"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded border px-4 py-2 text-sm"
                />
                <input
                  required
                  name="school"
                  placeholder="School name"
                  className="w-full rounded border px-4 py-2 text-sm"
                />

                <button
                  type="submit"
                  className="w-full rounded bg-black px-4 py-2 text-sm font-medium text-white"
                >
                  Download now
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
