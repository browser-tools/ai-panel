import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container className="py-12 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="block h-6 w-6 relative">
            <img src="/images/icon4.svg" alt="AI Panel Icon" className="h-6 w-6" />
          </span>
          <span className="font-bold">AI Panel</span>
        </div>
        <p className="text-sm text-muted-foreground mb-8 text-center">Privacy-first AI chat on any webpage.</p>
        <div className="border-t pt-8 w-full">
          <p className="text-sm text-muted-foreground text-center">© 2024 AI Panel. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
