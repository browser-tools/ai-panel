import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Globe, Star, ArrowRight, Menu, MessageSquare, Lock } from "lucide-react"
import { Container } from "@/components/ui/container"

export default function AIPanelLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <Container maxWidth="4xl" className="flex h-16 items-center justify-between">
          {/* Left: Logo & Title */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center relative">
              <div className="h-5 w-3 bg-primary-foreground rounded-sm absolute right-1"></div>
            </div>
            <span className="text-xl font-bold">AI Panel</span>
          </div>

          {/* Center: Nav */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <a href="#privacy" className="text-sm font-medium hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Right: Empty for now, can add buttons if needed */}
          <div className="w-32"></div>
  </Container>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
  <Container maxWidth="4xl">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              🔒 Privacy-First AI Chat
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              AI Chat on Any Webpage,
              <span className="text-primary"> Zero Compromises</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              No accounts. No API keys. No middle servers. Open the sidebar, ask your questions, and continue browsing
              with complete privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Install Browser Extension
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                See Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Works on any website • No registration required • Completely private
            </p>
          </div>
  </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
  <Container maxWidth="4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Privacy-first AI, everywhere you browse</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful AI assistance without sacrificing your privacy or workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Zero Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No accounts, no tracking, no data stored on our servers. Your conversations stay completely private.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Works Everywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compatible with any website. Research, shop, learn, or work - AI Panel adapts to your browsing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Instant Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No API keys to manage. No setup required. Install once and get AI assistance on every page you visit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Context Aware</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ask questions about the current page, get summaries, or have general conversations - all in one
                  sidebar.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
  </Container>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Talk to AI in one click — without leaving a page</h2>
            <p className="text-xl text-muted-foreground">
              Click the extension icon to open a side panel with your favorite AI assistant — no more tab switching to
              chat with AI.
            </p>
          </div>

          {/* Features Grid */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Built-in AI Providers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use ChatGPT, Claude, Gemini, and more, or setup a custom URL for your preferred AI service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary rotate-45" />
                    Resize & Hide Panel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Resize the panel to fit your screen perfectly. Easily hide it by clicking anywhere outside the
                    panel.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Quick Bookmark Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pin "AI Panel" to your bookmarks for even quicker access across all your browsing sessions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Works Out of the Box
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No API keys needed, no extra sign-ups required. Use your existing AI provider account seamlessly.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Privacy Features */}
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Privacy & Security Focus</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Direct AI Communication</p>
                    <p className="text-sm text-muted-foreground">
                      Talk directly to AI models without any intermediate servers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">No Data Access</p>
                    <p className="text-sm text-muted-foreground">Doesn't request access to your data on any website</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">CSP Compatible</p>
                    <p className="text-sm text-muted-foreground">Does not disable Content Security Policy</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Clean Interface</p>
                    <p className="text-sm text-muted-foreground">
                      No floating buttons on pages — just clean, native controls
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Zero Permissions</p>
                    <p className="text-sm text-muted-foreground">
                      No permissions required for installation or operation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Keyboard Shortcuts</p>
                    <p className="text-sm text-muted-foreground">Some providers use CTRL+ENTER to send messages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </Container>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-muted/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See AI Panel in Action</h2>
            <p className="text-xl text-muted-foreground">Watch how easy it is to get AI assistance on any webpage</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="AI Panel Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              See how AI Panel integrates seamlessly with your browsing experience
            </p>
          </div>
  </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for privacy-first AI?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who browse smarter without compromising their privacy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Install AI Panel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Free forever • No registration • Works everywhere</p>
          </div>
  </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <Container className="py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center relative">
                <div className="h-4 w-2 bg-primary-foreground rounded-sm absolute right-0.5"></div>
              </div>
              <span className="font-bold">AI Panel</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Privacy-first AI chat on any webpage.</p>

            <div className="border-t pt-8">
              <p className="text-sm text-muted-foreground">© 2024 AI Panel. All rights reserved.</p>
            </div>
          </div>
  </Container>
      </footer>
    </div>
  )
}
