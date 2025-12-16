"use client"

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  TextField
} from "@mui/material"
import StarIcon from "@mui/icons-material/Star"

const categories = ["Beach", "Mountains", "Cities", "Camping", "Luxury"]

const listings = Array.from({ length: 8 })

export default function Home() {
  return (
    <Box maxWidth="xl" mx="auto" px={3}>

      {/* HERO SECTION */}
      <Box textAlign="center" py={8}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Find your next stay
        </Typography>

        <Typography color="text.secondary" maxWidth={600} mx="auto" mb={4}>
          Discover unique homes, experiences, and places around the world.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <TextField
            size="small"
            placeholder="Search destinations"
            sx={{ width: 280 }}
          />
          <Button variant="contained" size="large">
            Search
          </Button>
        </Stack>
      </Box>

      {/* CATEGORIES */}
      <Stack
        direction="row"
        spacing={3}
        py={3}
        sx={{
          overflowX: "auto",
          borderBottom: "1px solid #eee"
        }}
      >
        {categories.map(cat => (
          <Typography
            key={cat}
            fontWeight={500}
            sx={{
              cursor: "pointer",
              whiteSpace: "nowrap",
              color: "text.secondary",
              "&:hover": { color: "black" }
            }}
          >
            {cat}
          </Typography>
        ))}
      </Stack>

      {/* LISTINGS GRID */}
      <Box
        py={6}
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)"
        }}
        gap={4}
      >
        {listings.map((_, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 3,
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { boxShadow: 6 }
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image={`https://picsum.photos/id/${index}/200/300`}
            />

            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontWeight={600}>
                  Goa, India
                </Typography>

                <Stack direction="row" spacing={0.5} alignItems="center">
                  <StarIcon fontSize="small" />
                  <Typography variant="body2">4.8</Typography>
                </Stack>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                2–7 Apr
              </Typography>

              <Typography fontWeight={600} mt={1}>
                ₹5,000 night
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

    </Box>
  )
}
