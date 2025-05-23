// components/CaseStudyCard.tsx
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import type { CaseStudyCard } from "@/types/caseStudies";

export default function CaseStudyCard({ cs }: { cs: CaseStudyCard }) {
  const [open, setOpen] = useState(false);

  return (
    <Card elevation={0}>
      <CardMedia component="img" height="180" image={cs.image} alt={cs.title} />

      <CardContent sx={{ pb: 3 }}>
        <Chip
          label={cs.tag}
          color="primary"
          size="small"
          sx={{ mb: 1, fontWeight: 700, textTransform: "uppercase" }}
        />

        <Typography variant="h6" fontWeight={700} gutterBottom>
          {cs.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={
            open
              ? {}
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }
          }
        >
          {cs.content}
        </Typography>

        <Button
          size="small"
          sx={{ mt: 1 }}
          onClick={() => setOpen((p) => !p)}
        >
          {open ? "Show less" : "Read more >>"}
        </Button>
      </CardContent>
    </Card>
  );
}
