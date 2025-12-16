"use client"

import {
  Box,
  Typography,
  Stack,
  Button
} from "@mui/material"
import { useParams, useRouter } from "next/navigation"

export default function ListingDetails() {
  const { id } = useParams()
  const router = useRouter()

  return (
    <Box maxWidth="md" mx="auto" p={4}>
      <Button onClick={() => router.back()} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h4" fontWeight={700} gutterBottom>
        Listing #{id}
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Goa, India · ⭐ 4.8
      </Typography>

      <Box
        height={400}
        borderRadius={3}
        bgcolor="#eee"
        mb={3}
      />

      <Typography variant="h6" gutterBottom>
        ₹5,000 night
      </Typography>

      <Typography color="text.secondary">
        This is a beautiful stay located near the beach with all modern
        amenities. Perfect for families and couples.
      </Typography>

      <Stack direction="row" spacing={2} mt={4}>
        <Button variant="contained">
          Reserve
        </Button>
        <Button variant="outlined">
          Contact Host
        </Button>
      </Stack>
    </Box>
  )
}
