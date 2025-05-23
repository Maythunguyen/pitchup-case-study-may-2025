import Masonry from "@mui/lab/Masonry";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "@/data";

export default function CaseStudiesPage() {
  return (
    <section>
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white mb-20">
                Case Studies
            </h1>
        <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={2}>
        {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
        ))}
        </Masonry>
    </section>
    
  );
}