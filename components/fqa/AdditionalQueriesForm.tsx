"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Alert,
  Stack,
  Typography,
  Box,
} from "@mui/material";

export default function AdditionalQueriesForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
//    Built-in validation 
    if (!form.checkValidity()) {
      form.reportValidity();          
      return;                         
    }

    setSubmitted(true);
    form.reset();                  
  };

  return (
    <Box className="mt-12 md:max-w-xl">
      <Typography variant="h6" className="mb-10 !font-semibold" sx={{ mb: 3 }}>
        Additional Queries
      </Typography>

      {submitted && (
        <Alert
          severity="success"
          onClose={() => setSubmitted(false)}
          className="mb-4"
        >
          Thank you!
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        {/* name + email */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          className="mb-6"
        >
          <TextField
            required
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="outlined"
          />
        </Stack>

        {/* message */}
        <TextField
          required
          fullWidth
          name="message"
          label="Write message here"
          multiline
          rows={6}
          variant="outlined"
          className="mb-6"
        />

        {/* submit */}
        <Box textAlign="right" sx={{ mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ px: 4 }}
            className="mt-10"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
