"use client";

import { useState, useMemo } from "react";
import { Category, FAQItem } from "@/types/faq";

import {
  TextField,
  Chip,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = { data: FAQItem[] };
const chips: Category[] = ["all", "school", "community"];

export default function FqaCategorized({ data = [] }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [openId, setOpenId] = useState<string | null>(null);

    // filter data
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (term) return data.filter((f) => f.question.toLowerCase().includes(term));
    if (category === "all") return data;
    return data.filter((f) => f.category === category);
  }, [search, category, data]);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

 
  return (
    <Box className="space-y-8">
        <div className="mb-20">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                Frequently <br /> Ask Questions
            </h1>
        </div>
      {/* search */}
      <TextField
        fullWidth
        size="small"
        label="Search FAQs…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* chips */}
      <Stack direction="row" spacing={1}>
        {chips.map((c) => (
          <Chip
            key={c}
            label={
              c === "all"
                ? "All"
                : c === "school"
                ? "For Schools"
                : "For Community Users"
            }
            color={category === c ? "primary" : "default"}
            variant={category === c ? "filled" : "outlined"}
            onClick={() => setCategory(c)}
          />
        ))}
      </Stack>

      {/* accordion list */}
      <Box>
        {filtered.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={openId === faq.id}
            onChange={() => toggle(faq.id)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={500}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {filtered.length === 0 && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            No results found.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
