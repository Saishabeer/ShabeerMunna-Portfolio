# GitHub Pages Deployment Guide

Follow these simple steps to deploy your interactive React portfolio to GitHub Pages for free!

## Step 1: Initialize your Git Repository
If you haven't already initialized git locally, open a terminal in the `app` directory and run:

```bash
cd app
git init
git add .
git commit -m "Initial portfolio commit"
```

## Step 2: Create a GitHub Repository
1. Go to [GitHub](https://github.com/) and create a new public repository (e.g., `portfolio`).
2. Do not initialize it with a README, .gitignore, or license.
3. Link your local repository to the GitHub one:
```bash
git branch -M main
git remote add origin https://github.com/Saishabeer/<YOUR-REPO-NAME>.git
git push -u origin main
```

## Step 3: Install `gh-pages`
We use the `gh-pages` package to automate the deployment process.

```bash
npm install -D gh-pages
```

## Step 4: Update `package.json`
Open the `package.json` file inside your `app` folder and add two things:

1. At the very top (before `"name"`), add the homepage URL:
```json
"homepage": "https://Saishabeer.github.io/<YOUR-REPO-NAME>",
```
*(If you are creating a User Site e.g. `<username>.github.io`, the homepage is just `https://Saishabeer.github.io`)*

2. Inside the `"scripts"` section, add these two lines:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

## Step 5: Update `vite.config.js` 
Make sure your Vite base path matches your repository name. If your repository is named `portfolio`, change `base` in `vite.config.js` to:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/<YOUR-REPO-NAME>/',
})
```
*(If you are deploying to `Saishabeer.github.io` directly, keep the base as `'/'`)*

## Step 6: Deploy!
Run the deployment script:
```bash
npm run deploy
```

## Step 7: Configure GitHub Pages Settings
1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (on the left sidebar).
3. Under **Build and deployment**, confirm that the Source is set to **Deploy from a branch**.
4. Under **Branch**, make sure `gh-pages` is selected as the branch, and `/ (root)` is the folder.
5. Click **Save**.

Your portfolio will now be live at `https://Saishabeer.github.io/<YOUR-REPO-NAME>`! 🚀

---
**Updating Your Site in the Future**
Whenever you add a new project or experience in `src/data.js`:
1. Save your changes.
2. Run `npm run deploy`
3. That's it! GitHub Pages will update automatically.
