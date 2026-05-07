import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Play, X } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  category: "JOGOS" | "CORTES" | "PESSOAL";
  url: string;
}

const videos: VideoItem[] = [
  { id: "CfXThpfOmGU", title: "Curiosidade sobre Jogos", category: "JOGOS", url: "https://youtube.com/shorts/CfXThpfOmGU" },
  { id: "3KG6HxX237Q", title: "Curiosidade sobre Jogos", category: "JOGOS", url: "https://youtube.com/shorts/3KG6HxX237Q" },
  { id: "1wn7qlJQFA4", title: "Corte Profissional", category: "CORTES", url: "https://youtube.com/shorts/1wn7qlJQFA4" },
  { id: "cPGK8cYk46g", title: "Vlog", category: "PESSOAL", url: "https://youtube.com/shorts/cPGK8cYk46g" },
  { id: "WcexsCaOACM", title: "Vlog", category: "PESSOAL", url: "https://youtube.com/shorts/WcexsCaOACM" },
];

const tools = ["Premiere", "CapCut", "Canva", "Photoshop"];
const skills = ["Edição", "Roteiro", "Captação", "Social Media", "Design"];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [showReminder, setShowReminder] = useState(true);
  const [showContactAlert, setShowContactAlert] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"JOGOS" | "CORTES" | "PESSOAL" | "TODOS">("TODOS");

  const filteredVideos = activeCategory === "TODOS" ? videos : videos.filter(v => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background noise effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 /%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23noise)%22 /%3E%3C/svg%3E')",
      }}></div>

      {/* Reminder Dialog */}
      {showReminder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-card border-2 border-primary/50 p-8 max-w-md w-full" style={{
            transform: "rotate(-1deg)",
            boxShadow: "0 20px 60px rgba(255, 107, 53, 0.2)",
          }}>
            <h2 className="font-display text-2xl mb-4 text-primary">LEMBRE-SE</h2>
            <p className="text-foreground mb-6 leading-relaxed">
              <span className="font-handwritten text-xl text-purple-400">FREELANCER REMOTO</span>
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setShowReminder(false)}
                variant="outline"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary/10"
              >
                Cancelar OK
              </Button>
              <Button
                onClick={() => setShowContactAlert(true)}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Contatos
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Alert */}
      <AlertDialog open={showContactAlert} onOpenChange={setShowContactAlert}>
        <AlertDialogContent className="bg-card border-2 border-primary">
          <AlertDialogTitle className="font-display text-primary">Contatos</AlertDialogTitle>
          <AlertDialogDescription className="space-y-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-primary" />
              <a href="https://wa.me/5538988320744" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                WhatsApp: 38988320744
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-primary" />
              <a href="https://instagram.com/7gustavo77" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                Instagram: @7gustavo77
              </a>
            </div>
          </AlertDialogDescription>
          <AlertDialogAction className="bg-primary text-primary-foreground hover:bg-primary/90">
            Fechar
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="bg-card border-2 border-primary max-w-2xl">
          <DialogTitle className="sr-only">{selectedVideo?.title}</DialogTitle>
          {selectedVideo && (
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Header/Navigation */}
      <header className="relative z-40 border-b-2 border-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="font-display text-3xl md:text-4xl" style={{ color: "#ff6b35" }}>
            Portifólio de <span className="text-purple-400">Edição</span>
          </h1>
          <div className="flex gap-4">
            <a
              href="https://wa.me/5538988320744"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/20 rounded-lg transition-all"
            >
              <MessageCircle className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://instagram.com/7gustavo77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/20 rounded-lg transition-all"
            >
              <Instagram className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b-2 border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start" style={{ transform: "rotate(-2deg)" }}>
              <div className="rounded-2xl border-4 border-primary bg-gradient-to-br from-purple-500/20 to-primary/20 flex items-center justify-center relative overflow-hidden" style={{ width: "280px", height: "440px" }}>
                <img
                  src="/manus-storage/gustavo-profile_a49c1032.png"
                  alt="Gustavo Barbosa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="space-y-6" style={{ transform: "rotate(1deg)" }}>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Gustavo Barbosa
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">2 anos como editor</span>, criando conteúdo de alto impacto e engajamento.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://wa.me/5538988320744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
                  style={{ transform: "rotate(-1deg)" }}
                >
                  Conversar no WhatsApp
                </a>
                <a
                  href="https://instagram.com/7gustavo77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary/10 transition-all font-semibold"
                  style={{ transform: "rotate(1deg)" }}
                >
                  Ver no Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="relative py-16 md:py-24 border-b-2 border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ transform: "rotate(-1deg)" }}>
            Meus <span className="text-purple-400">Vídeos</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {(["TODOS", "JOGOS", "CORTES", "PESSOAL"] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2 font-semibold transition-all transform hover:scale-105 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-2 border-primary"
                    : "border-2 border-primary/50 text-foreground hover:border-primary"
                }`}
                style={{ transform: activeCategory === cat ? "rotate(-1deg)" : "rotate(1deg)" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, idx) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group cursor-pointer"
                style={{ transform: `rotate(${idx % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className="relative bg-black rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary transition-all aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <Play className="w-16 h-16 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="absolute top-3 right-3 px-3 py-1 bg-primary/80 text-primary-foreground text-sm font-semibold rounded">
                    {video.category}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="relative py-16 md:py-24 border-b-2 border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ transform: "rotate(1deg)" }}>
            Experiência & <span className="text-purple-400">Habilidades</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="space-y-6" style={{ transform: "rotate(-1deg)" }}>
              <h3 className="font-display text-2xl text-primary">Experiências</h3>
              <div className="space-y-4">
                <div className="bg-card border-2 border-primary/30 p-6 hover:border-primary transition-all">
                  <h4 className="font-semibold text-lg text-foreground">Editor do Canal "Tavin"</h4>
                  <p className="text-sm text-foreground/60">Atual</p>
                  <p className="text-foreground/80 mt-2">Edição de vídeos e conteúdo audiovisual</p>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="font-semibold text-lg text-primary mb-3">Ferramentas</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map(tool => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-primary/20 border-2 border-primary/50 text-foreground text-sm font-semibold hover:border-primary transition-all"
                      style={{ transform: "rotate(-0.5deg)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6" style={{ transform: "rotate(1deg)" }}>
              <h3 className="font-display text-2xl text-purple-400">Habilidades</h3>
              <div className="space-y-3">
                {skills.map((skill, idx) => (
                  <div
                    key={skill}
                    className="bg-card border-2 border-primary/30 p-4 hover:border-primary transition-all"
                    style={{ transform: `rotate(${idx % 2 === 0 ? -0.5 : 0.5}deg)` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">{skill}</span>
                      <div className="w-32 h-2 bg-primary/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${80 + Math.random() * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t-2 border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-lg text-primary mb-3">Contato</h3>
              <div className="space-y-2">
                <a
                  href="https://wa.me/5538988320744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                >
                  WhatsApp: 38988320744
                </a>
                <a
                  href="https://instagram.com/7gustavo77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                >
                  Instagram: @7gustavo77
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg text-primary mb-3">Categorias</h3>
              <div className="space-y-2">
                <p className="text-foreground/80">• Edição de Vídeo</p>
                <p className="text-foreground/80">• Roteiro</p>
                <p className="text-foreground/80">• Captação</p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg text-primary mb-3">Disponibilidade</h3>
              <p className="text-foreground/80">
                <span className="font-handwritten text-lg text-purple-400">FREELANCER REMOTO</span>
              </p>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-foreground/60">
            <p>© 2025 Gustavo Barbosa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
