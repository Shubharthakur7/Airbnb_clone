"use client"

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  IconButton
} from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useState } from "react";
import { useRouter } from "next/navigation"


const categories = ["Beach", "Mountains", "Cities", "Camping", "Luxury"]

const listings = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  location: "Goa, India",
  date: "2–7 Apr",
  price: "₹5,000 night",
  rating: 4.8,
  images: [
    `https://picsum.photos/600/400?random=${i * 3 + 1}`,
    `https://picsum.photos/600/400?random=${i * 3 + 2}`,
    `https://picsum.photos/600/400?random=${i * 3 + 3}`
  ]
}))

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <Box maxWidth="xl" mx="auto" px={3}>

      {/* HERO */}
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

      {/* LISTINGS */}
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
        {listings.map(listing => (
          <ListingCard
            key={listing.id}
            listing={listing}
            isFavorite={favorites.includes(listing.id)}
            onToggleFavorite={() => toggleFavorite(listing.id)}
          />
        ))}
      </Box>

    </Box>
  )
}

/* ----------------------------- */
/* LISTING CARD COMPONENT */
/* ----------------------------- */

function ListingCard({
  listing,
  isFavorite,
  onToggleFavorite
}: {
  listing: typeof listings[number]
  isFavorite: boolean
  onToggleFavorite: () => void
}) {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const prev = () =>
    setIndex(i => (i === 0 ? listing.images.length - 1 : i - 1))

  const next = () =>
    setIndex(i => (i === listing.images.length - 1 ? 0 : i + 1))

  return (
    <Card
    onClick={() => router.push(`/listing/${listing.id}`)}
      sx={{
        borderRadius: 3,
        cursor: "pointer",
        "&:hover .nav": { opacity: 1 }
      }}
    >
      {/* IMAGE + HEART */}
      <Box position="relative">
        <CardMedia
          component="img"
          height="220"
          image={listing.images[index]}
          sx={{ objectFit: "cover" }}
        />

        {/* HEART ICON */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite()
          }}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "rgba(255,255,255,0.9)"
          }}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: "#FF385C" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        {/* LEFT ARROW */}
        <IconButton
          className="nav"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: 8,
            transform: "translateY(-50%)",
            bgcolor: "white",
            opacity: 0
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* RIGHT ARROW */}
        <IconButton
          className="nav"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          sx={{
            position: "absolute",
            top: "50%",
            right: 8,
            transform: "translateY(-50%)",
            bgcolor: "white",
            opacity: 0
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* CONTENT */}
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight={600}>
            {listing.location}
          </Typography>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <StarIcon fontSize="small" />
            <Typography variant="body2">
              {listing.rating}
            </Typography>
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
}
