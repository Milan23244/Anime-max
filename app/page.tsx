import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredAnime = {
  title: "Attack on Titan",
  description:
    "Humanity fights for survival against giant humanoid Titans that have brought civilization to the brink of extinction.",
  rating: 9.0,
  year: 2023,
  episodes: 24,
  genres: ["Action", "Drama", "Fantasy"],
  image: "/placeholder.svg?height=400&width=800",
}

const popularAnime = [
  {
    id: 1,
    title: "Demon Slayer",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.7,
    year: 2023,
    episodes: 12,
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.9,
    year: 2023,
    episodes: 24,
    status: "Completed",
  },
  {
    id: 3,
    title: "One Piece",
    image: "/placeholder.svg?height=300&width=200",
    rating: 9.2,
    year: 2023,
    episodes: 1000,
    status: "Ongoing",
  },
  {
    id: 4,
    title: "My Hero Academia",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.5,
    year: 2023,
    episodes: 25,
    status: "Completed",
  },
  {
    id: 5,
    title: "Chainsaw Man",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.8,
    year: 2023,
    episodes: 12,
    status: "Completed",
  },
  {
    id: 6,
    title: "Tokyo Revengers",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.3,
    year: 2023,
    episodes: 24,
    status: "Ongoing",
  },
]

const recentlyAdded = [
  {
    id: 7,
    title: "Spy x Family",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.9,
    episodes: 12,
    addedDate: "2 days ago",
  },
  {
    id: 8,
    title: "Mob Psycho 100",
    image: "/placeholder.svg?height=300&width=200",
    rating: 9.1,
    episodes: 12,
    addedDate: "1 week ago",
  },
  {
    id: 9,
    title: "Death Note",
    image: "/placeholder.svg?height=300&width=200",
    rating: 9.0,
    episodes: 37,
    addedDate: "2 weeks ago",
  },
  {
    id: 10,
    title: "Naruto Shippuden",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.7,
    episodes: 500,
    addedDate: "3 weeks ago",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={featuredAnime.image || "/placeholder.svg"}
          alt={featuredAnime.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-2">
                {featuredAnime.genres.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
              <h1 className="text-5xl font-bold text-white">{featuredAnime.title}</h1>
              <p className="text-lg text-gray-200 leading-relaxed">{featuredAnime.description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{featuredAnime.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredAnime.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredAnime.episodes} Episodes</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href={`/watch/1`}>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Now
                  </Button>
                </Link>
                <Link href={`/anime/1`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    More Info
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Anime */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular This Season</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularAnime.map((anime) => (
              <Link key={anime.id} href={`/anime/${anime.id}`}>
                <Card className="group cursor-pointer transition-transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                      <Image
                        src={anime.image || "/placeholder.svg"}
                        alt={anime.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-black/70 text-white">
                          {anime.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold line-clamp-2 text-sm">{anime.title}</h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{anime.rating}</span>
                        </div>
                        <span>{anime.episodes} eps</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recently Added</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recentlyAdded.map((anime) => (
              <Link key={anime.id} href={`/anime/${anime.id}`}>
                <Card className="group cursor-pointer transition-transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                      <Image
                        src={anime.image || "/placeholder.svg"}
                        alt={anime.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="destructive" className="text-xs">
                          NEW
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold line-clamp-2 text-sm">{anime.title}</h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{anime.rating}</span>
                        </div>
                        <span>{anime.addedDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
