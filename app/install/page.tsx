import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Pin,
  Settings,
  Bookmark,
  ArrowRight,
  Chrome,
  FileBox as Firefox,
  Badge as Edge,
} from "lucide-react"
import Image from "next/image"

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center relative">
              <div className="h-5 w-3 bg-primary-foreground rounded-sm absolute right-1"></div>
            </div>
            <span className="text-xl font-bold">AI Panel</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Success Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Welcome to
              <span className="text-primary"> AI Panel!</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Thank you for installing AI Panel. Follow these quick steps to get started with privacy-first AI chat on
              any webpage.
            </p>
            <Badge variant="secondary" className="mb-8">
              🎉 Installation Complete
            </Badge>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in 3 Easy Steps</h2>
            <p className="text-xl text-muted-foreground">Complete these steps to unlock the full power of AI Panel</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <Card className="relative">
              <div className="absolute -left-4 top-6 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <CardHeader className="pl-8">
                <div className="flex items-center gap-3 mb-2">
                  <Pin className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Pin Extension to Browser Bar</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  Make AI Panel easily accessible by pinning it to your browser toolbar
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-8">
                <div className="mb-6">
                  <Image
                    src="/images/pin-extension.png"
                    alt="Pin AI Panel extension to browser toolbar"
                    width={800}
                    height={450}
                    className="rounded-lg border shadow-sm"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Chrome className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Chrome</p>
                      <p className="text-sm text-muted-foreground">
                        Click the puzzle icon → Find "AI Panel" → Click the pin icon
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Firefox className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Firefox</p>
                      <p className="text-sm text-muted-foreground">
                        Right-click toolbar → Customize → Drag AI Panel to toolbar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Edge className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Edge</p>
                      <p className="text-sm text-muted-foreground">
                        Click extensions icon → Find "AI Panel" → Click the eye icon
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative">
              <div className="absolute -left-4 top-6 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <CardHeader className="pl-8">
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Select Your AI Provider</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  Choose your preferred AI assistant from the extension options
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-8">
                <div className="mb-6">
                  <Image
                    src="/images/select-ai-provider.png"
                    alt="Select AI provider in AI Panel options"
                    width={800}
                    height={450}
                    className="rounded-lg border shadow-sm"
                  />
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Built-in Providers</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• ChatGPT (OpenAI)</li>
                        <li>• Claude (Anthropic)</li>
                        <li>• Gemini (Google)</li>
                        <li>• And more...</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Custom Setup</h4>
                      <p className="text-sm text-muted-foreground">
                        You can also configure a custom URL for your preferred AI service or self-hosted models.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Note:</strong> You'll use your existing account with your chosen AI provider. No
                      additional sign-ups required!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative">
              <div className="absolute -left-4 top-6 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <CardHeader className="pl-8">
                <div className="flex items-center gap-3 mb-2">
                  <Bookmark className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Add to Bookmarks (Optional)</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  For even quicker access, add AI Panel to your bookmarks bar
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-8">
                <div className="mb-6">
                  <Image
                    src="/images/add-to-bookmarks.png"
                    alt="Add AI Panel to bookmarks bar"
                    width={800}
                    height={450}
                    className="rounded-lg border shadow-sm"
                  />
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bookmark className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Quick Bookmark Access</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Right-click on the AI Panel extension icon and select "Add to bookmarks" for instant access
                        across all your browsing sessions.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        This step is optional but recommended for power users who want the fastest possible access to AI
                        assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Use */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">You're All Set!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              AI Panel is now ready to use. Click the extension icon on any webpage to start chatting with AI.
            </p>

            <div className="mb-8">
              <Image
                src="/images/open-ai-panel.png"
                alt="AI Panel sidebar opened on a webpage"
                width={800}
                height={450}
                className="rounded-lg border shadow-sm mx-auto"
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Quick Tips</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Resize the Panel</p>
                    <p className="text-sm text-muted-foreground">Drag the panel edges to fit your screen perfectly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hide Quickly</p>
                    <p className="text-sm text-muted-foreground">
                      Click anywhere outside the panel to hide it instantly
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Keyboard Shortcuts</p>
                    <p className="text-sm text-muted-foreground">Some providers use Ctrl+Enter to send messages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Complete Privacy</p>
                    <p className="text-sm text-muted-foreground">
                      Your conversations go directly to your chosen AI provider
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="/">
                  Start Using AI Panel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <a href="/#how-it-works">Learn More Features</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
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
        </div>
      </footer>
    </div>
  )
}
