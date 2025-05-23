// In your page or section component
import { useState } from "react";
import ProspectusModal from "./ProspectusModal";

export default function ProspectusSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex flex-col mt-20">
      <div>
        <h2 className="text-4xl font-bold">Download our prospectus</h2>
        <p className="mt-4 text-lg mb-10">
          Get to know us better and see how we can help you achieve your
          goals.
        </p>

      </div>
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded bg-black px-6 py-3 text-white"
        >
          Download prospectus
        </button>
      </div>
      

      <ProspectusModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
