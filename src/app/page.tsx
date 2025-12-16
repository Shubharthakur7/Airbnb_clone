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
import { IconButton } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { useState } from "react"


const categories = ["Beach", "Mountains", "Cities", "Camping", "Luxury"]

const listings = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  location: "Goa, India",
  date: "2–7 Apr",
  price: "₹5,000 night",
  rating: 4.8,
  images: [
    `https://picsum.photos/id/${i+5}/200/300`,
    `https://picsum.photos/id/${i+10}/200/300`,
    `https://picsum.photos/id/${i+10}/200/300`,
    `https://picsum.photos/id/${i+10}/200/300`
  ]
}))


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
       {listings.map((listing) => {
  const [index, setIndex] = useState(0)

  const prev = () =>
    setIndex(i => (i === 0 ? listing.images.length - 1 : i - 1))

  const next = () =>
    setIndex(i => (i === listing.images.length - 1 ? 0 : i + 1))

  return (
    <Card
      key={listing.id}
      sx={{
        borderRadius: 3,
        cursor: "pointer",
        position: "relative",
        "&:hover .nav": { opacity: 1 }
      }}
    >
      {/* IMAGE */}
      <Box position="relative">
        <CardMedia
          component="img"
          height="220"
          image={listing.images[index]}
        />

        {/* LEFT */}
        <IconButton
          className="nav"
          onClick={prev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 8,
            transform: "translateY(-50%)",
            bgcolor: "white",
            opacity: 0,
            transition: "0.2s"
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* RIGHT */}
        <IconButton
          className="nav"
          onClick={next}
          sx={{
            position: "absolute",
            top: "50%",
            right: 8,
            transform: "translateY(-50%)",
            bgcolor: "white",
            opacity: 0,
            transition: "0.2s"
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* CONTENT */}
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight={600}>{listing.location}</Typography>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <StarIcon fontSize="small" />
            <Typography variant="body2">{listing.rating}</Typography>
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {listing.date}
        </Typography>

        <Typography fontWeight={600} mt={1}>
          {listing.price}
        </Typography>
      </CardContent>
    </Card>
  )
})}

      </Box>

    </Box>
  )
}
