"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  SkipBack,
  SkipForward,
  ThumbsUp,
  ThumbsDown,
  Share,
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const animeData = {
  id: 1,
  title: "Attack on Titan",
  episode: 1,
  episodeTitle: "To You, in 2000 Years",
  description:
    "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  duration: "24:30",
  views: "2.5M",
  likes: 45000,
  dislikes: 1200,
  uploadDate: "2 days ago",
}

const episodes = [
  { number: 1, title: "To You, in 2000 Years", duration: "24:30", thumbnail: "/placeholder.svg?height=120&width=200" },
  { number: 2, title: "That Day", duration: "24:15", thumbnail: "/placeholder.svg?height=120&width=200" },
  {
    number: 3,
    title: "A Dim Light Amid Despair",
    duration: "24:45",
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
  {
    number: 4,
    title: "The Night of the Closing Ceremony",
    duration: "24:20",
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
  { number: 5, title: "First Battle", duration: "24:35", thumbnail: "/placeholder.svg?height=120&width=200" },
]

const relatedAnime = [
  { id: 2, title: "Demon Slayer", thumbnail: "/placeholder.svg?height=120&width=200", rating: 8.7 },
  { id: 3, title: "Jujutsu Kaisen", thumbnail: "/placeholder.svg?height=120&width=200", rating: 8.9 },
  { id: 4, title: "One Piece", thumbnail: "/placeholder.svg?height=120&width=200", rating: 9.2 },
]

export default function WatchPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(1470) // 24:30 in seconds

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Video Player */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden group">
              <video
                className="w-full h-full object-cover"
                poster="/placeholder.svg?height=480&width=854"
                controls={false}
              >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">LIVE</Badge>
                    <span className="text-white text-sm">Episode {animeData.episode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Settings className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <SkipBack className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <SkipForward className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    <div className="flex-1 flex items-center gap-2 text-white text-sm">
                      <span>{formatTime(currentTime)}</span>
                      <div className="flex-1 bg-white/30 rounded-full h-1">
                        <div
                          className="bg-red-600 h-1 rounded-full transition-all"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  {animeData.title} - Episode {animeData.episode}: {animeData.episodeTitle}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{animeData.views} views</span>
                  <span>{animeData.uploadDate}</span>
                  <span>{animeData.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {animeData.likes.toLocaleString()}
                  </Button>
                  <Button variant="outline" size="sm">
                    <ThumbsDown className="w-4 h-4 mr-2" />
                    {animeData.dislikes.toLocaleString()}
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{animeData.description}</p>
              </div>
            </div>

            {/* Episodes List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Episodes</h3>
              <div className="space-y-3">
                {episodes.map((episode) => (
                  <Card key={episode.number} className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-32 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={episode.thumbnail || "/placeholder.svg"}
                            alt={`Episode ${episode.number}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="font-medium truncate">
                              Episode {episode.number}: {episode.title}
                            </h4>
                            <span className="text-sm text-muted-foreground ml-2">{episode.duration}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Episode {episode.number}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Anime */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Related Anime</h3>
              <div className="space-y-3">
                {relatedAnime.map((anime) => (
                  <Link key={anime.id} href={`/anime/${anime.id}`}>
                    <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <CardContent className="p-3">
                        <div className="flex gap-3">
                          <div className="relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={anime.thumbnail || "/placeholder.svg"}
                              alt={anime.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate mb-1">{anime.title}</h4>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-yellow-500">★</span>
                              <span className="text-xs text-muted-foreground">{anime.rating}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
