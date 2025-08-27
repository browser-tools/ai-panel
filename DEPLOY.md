# GitHub Pages Deployment

1. Build your Next.js app:
   
   pnpm build

2. Export static files:
   
   pnpm export

3. Deploy to GitHub Pages:
   
   pnpm deploy

---

- The static site will be published to the `gh-pages` branch of your repository.
- The site will be available at: https://browser-tools.github.io/ai-panel/
- Make sure you have the `gh-pages` package installed. If not, run:
  
  pnpm add -D gh-pages

- You may need to set your repository's GitHub Pages source to the `gh-pages` branch in repository settings.
