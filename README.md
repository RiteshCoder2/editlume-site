# Editlume Website — beginner-friendly starter

This is a complete frontend starter for Editlume, a premium editorial-style video-editing brand website.

## What is included?

- React + TypeScript + Vite
- Custom CSS (no Tailwind setup required for this starter)
- Responsive layouts for desktop, tablet, and mobile
- Header without a Portfolio navigation item
- Cinematic hero section
- Services, featured project cards, process, studio approach, and footer
- “View Our Work” opens the Editlume introduction panel
- Project cards open sample project details
- Get a Quote opens a contact-form preview
- Accessible close behavior and Escape key support

## Before you start

Install these two programs first:

1. **Node.js LTS:** https://nodejs.org/en/download
2. **Visual Studio Code:** https://code.visualstudio.com/

After installing Node.js, close and reopen VS Code if it was already open.

## Run the website on your laptop

1. Download and extract the `editlume-site.zip` file.
2. Open VS Code.
3. Choose **File → Open Folder...**
4. Select the extracted `editlume-site` folder (select the folder itself, not an individual file).
5. In VS Code choose **Terminal → New Terminal**.
6. Run this command and press Enter:

   ```bash
   npm install
   ```

   This downloads the project's required packages. It requires an internet connection on first setup.

7. After it finishes, run:

   ```bash
   npm run dev
   ```

8. The terminal will show a local address, usually `http://localhost:5173/`. Hold Ctrl and click it, or copy it into Chrome.
9. Keep the terminal open while previewing the site. To stop the server, click the terminal and press `Ctrl + C`.

## How the files connect

- `index.html`: the initial HTML page and root element.
- `src/main.tsx`: starts React and imports the global stylesheet.
- `src/App.tsx`: page sections, content, modals, and interactions.
- `src/styles.css`: all website styling and responsive rules.
- `package.json`: package list and commands such as `npm run dev` and `npm run build`.
- `vite.config.ts`: Vite development/build setup.

Vite connects the files together. You do not need to manually link each component.

## Make a change

Example: to change the hero headline, open `src/App.tsx` in VS Code and find `Your Vision.`. Edit the text, press `Ctrl + S`, and look at Chrome. The local preview should refresh automatically.

To change colors or spacing, open `src/styles.css`. Search for a class name such as `.hero`, `.button-dark`, or `.services-grid`.

## Check that it builds

Stop the development server with `Ctrl + C`, then run:

```bash
npm run build
```

If the build completes without errors, the frontend is ready for deployment. Then run `npm run dev` again to continue editing locally.

## Important before the real website goes live

- The contact form is a **frontend demo only**. It validates the fields and shows a preview notice, but it does not send email or save data. Connect a secure form service or backend before relying on it for real leads.
- The portfolio cards use remote illustrative photography and concept copy. Replace with your friend's approved project images and descriptions before publishing.
- Testimonial cards use sample placeholder text and must be replaced with genuine testimonials or removed.
- The social icons currently open the general social network websites. Replace these URLs with the actual brand profiles.
- Project images use remote Unsplash image URLs, so image display needs an internet connection.
- Statistics from the reference were changed to editorial studio principles so the template does not claim unverified client numbers.

## Deploy later

A simple deployment option is Vercel: https://vercel.com/ . Once the local build works, upload the project to a GitHub repository, import that repository in Vercel, and deploy. You can do this later; it is not needed to run the website on your laptop.
