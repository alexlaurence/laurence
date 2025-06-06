# Laurence Family Archive

Welcome to our family's digital memory book! This archive is a special place where we preserve our family's history, stories, photos, videos, and more—so that every generation can remember, celebrate, and add to our shared legacy.

---

## What Is This Archive?

This website is a private, family-only collection of:
- **Family stories and news**
- **Photos and videos** from family events
- **Audio recordings and oral histories**
- **Genealogy and family tree information**
- **Historical documents and keepsakes**

## Why Github Pages?

We chose Github Pages since it is hosted on Github, a product owned by Microsoft Corporation. We believe Github will outlast many generations and will survive the test of time, even after death of maintainers.

It's a living project—meant to grow as our family grows. Everyone is welcome to contribute!

---

## How to View the Archive

- **Online:** Visit our family archive at:

  `https://alexlaurence.github.io/laurence/`

---

## How to Contribute

### If Alexander Laurence is alive
- **Send your photos, stories, or questions to Alexander.**
- Alexander will add your contributions to the archive and keep everything organized.
- You can email, text, or call Alexander for help or to share your memories.

### If Alexander Laurence is no longer maintaining the archive
- **Anyone in the family can keep the archive going!**
- You can make your own copy and host it online, or just view it on your own computer.

#### To keep the archive alive for future generations:

   1. Create a free GitHub account if you don't have one:
     - Go to github.com and click "Sign Up"
     - Choose a username, enter your email, and create a password
     - Follow the verification steps to complete your account
   2. Fork this archive to your own repository:
     - Click "Fork" on the top right hand side of this page. Give it a name such as "laurence", and click "Create fork".
     - Make sure that the repository privacy setting is set to "Public" so that GitHub Pages will work
     - Wait for about 10 minutes to deploy the site to Github Pages. The achive should be live at:

     `https://[your-username].github.io/laurence/`

    (Replace `[your-username]` with the actual GitHub username hosting the archive.)

   3. Clone your fork to your PC.
     - Download GitHub Desktop (desktop.github.com), install it, and log-in.
     - Clone your forked repository (not this repository) by clicking the green button on your repository page, and click Open with Github desktop.
     - Now you should have your files on your PC for editing.

   4. Updating the Archive
     - Whenever you want to update the site, use Github pages to "push" the changes back to your repository. To do this:
       - Make the changes to the files on your computer
       - Notice the detected changes on Github Desktop, and give it a commit message (for example: "I updated the About page"). Then click "Commit to main".
       - Then click "Push" to origin to send the files to Github.

---

## How to Run the Archive Locally (On Your Computer)
It is time-consuming to make changes, push to Github pages, wait 10 minutes to deploy to see if your changes worked. So we made a way to run the site locally on your PC for testing purposes before you push the changes to Github Pages. Just follow the steps for your computer:

### For Mac Users
1. **Open the Terminal app.**
2. **Go to the folder where you downloaded the archive.**
3. **Run this command:**
   ```
   ./bin/jekyll-serve-mac.sh
   ```
   - The script will guide you through any setup (it will install what you need if it's missing).
4. **Open your web browser and go to:**
   `http://localhost:4000`

### For Windows Users
1. **Open Command Prompt (cmd.exe).**
2. **Go to the folder where you downloaded the archive.**
3. **Run this command:**
   ```
   bin\jekyll-serve-windows.bat
   ```
   - The script will help you install anything you need and start the archive.
4. **Open your web browser and go to:**
   `http://localhost:4000`

### For Ubuntu/Linux Users
1. **Open the Terminal.**
2. **Go to the folder where you downloaded the archive.**
3. **Run this command:**
   ```
   ./bin/jekyll-serve-ubuntu.sh
   ```
   - The script will guide you through setup and start the archive.
4. **Open your web browser and go to:**
   `http://localhost:4000`

---

## How to Add New Content

- **Photos, videos, and stories:**
  - Send them to Alexander Laurence (if he is maintaining the archive).
  - Or, if you are running your own copy, add them to the appropriate folders:
    - Photos: `images/` or `assets/img/`
    - Stories and news: Add a new file in `_posts/` (ask for a template if you need one)
    - Videos: Add to the `video-archive` page or `assets/` folder
- **Not sure how?** Just ask for help! We want everyone to be able to contribute.

## How to Add a New Video to the Archive

If you want to add a new video to the archive yourself, follow these steps:

1. **Prepare your video file:**
   - Convert your video to `.mp4` format for best compatibility.
   - Place the video file in the `assets/videos/` folder (create this folder if it doesn't exist).
   - **Upload your video to:** `assets/videos/`
   - Example: `assets/videos/family-bbq-2010.mp4`

2. **Add a video entry to the archive page:**
   - Open the file `_pages/video-archive.md` in a text editor.
   - Find the section for the correct category (Family Events, Home Movies, etc.).
   - Add a new block like this inside the appropriate `<div class="video-carousel" ...>`:
     ```html
     <div class="video-poster"
          data-title="Family BBQ 2010"
          data-synopsis="A fun-filled summer BBQ with the whole family at the park."
          data-video="family-bbq-2010.mp4"
          data-tags="bbq,2010,summer,park,family event,food">
       <div class="poster-blank">Family BBQ 2010</div>
     </div>
     ```
   - **data-title**: The display title of the video.
   - **data-synopsis**: A short description of the video.
   - **data-video**: The filename of your video (should match the file you placed in `assets/videos/`).
   - **data-tags**: Comma-separated keywords for search (include year, event type, people, location, etc.).
   - The text inside `<div class="poster-blank">...</div>` is shown as the "cover" for the video in the gallery.

3. **(Optional) Use a custom poster image:**
   - If you want a custom image as the video poster, you can use an `<img>` tag instead of the default blank box:
     ```html
     <div class="video-poster"
          data-title="Family BBQ 2010"
          data-synopsis="A fun-filled summer BBQ with the whole family at the park."
          data-video="family-bbq-2010.mp4"
          data-tags="bbq,2010,summer,park,family event,food">
       <img src="/assets/img/bbq-2010-thumb.jpg" alt="Family BBQ 2010" class="poster-image"/>
     </div>
     ```
   - Make sure to add your poster image to the appropriate folder (e.g., `assets/img/`).

4. **Test your addition:**
   - Run the site locally (see instructions above).
   - Search for your video using the search bar.
   - Click the poster to open the modal and verify the title, synopsis, and tags.
   - (If you implement playback) Make sure the video plays correctly.

5. **Commit and push your changes:**
   - After confirming everything works, save your changes and upload them to the repository.

**Summary Checklist:**
- [ ] Place video file in the `assets/videos/` folder
- [ ] Add a `<div class="video-poster" ...>` block in `_pages/video-archive.md` under the correct category
- [ ] Fill in `data-title`, `data-synopsis`, `data-video`, and `data-tags`
- [ ] (Optional) Add a custom poster image
- [ ] Test locally
- [ ] Commit and push your changes

If you want to automate or further enhance this process (e.g., with thumbnails or a CMS), ask Alexander or another technical family member for help!

## How to Add a New Audio Recording to the Archive

If you want to add a new audio recording (such as an interview, oral history, or family story), follow these steps:

1. **Prepare your audio file:**
   - Convert your audio to `.mp3` format for best compatibility.
   - Place the audio file in the `assets/audio/` folder (create this folder if it doesn't exist).
   - **Upload your audio to:** `assets/audio/`
   - Example: `assets/audio/grandpa-stories-2020.mp3`

2. **Add an audio entry to the archive page:**
   - Open the file `_pages/audio-archive.md` in a text editor.
   - Find the section for the correct category (e.g., Oral Histories, Family Stories, etc.).
   - Add a new block like this inside the appropriate `<div class="audio-carousel" ...>` (or similar structure):
     ```html
     <div class="audio-poster"
          data-title="Grandpa's Stories 2020"
          data-synopsis="Grandpa shares memories from his childhood and family history."
          data-audio="grandpa-stories-2020.mp3"
          data-tags="grandpa,2020,oral history,stories,elders,interview">
       <div class="poster-blank">Grandpa's Stories 2020</div>
     </div>
     ```
   - **data-title**: The display title of the audio recording.
   - **data-synopsis**: A short description of the audio content.
   - **data-audio**: The filename of your audio file (should match the file you placed in `assets/audio/`).
   - **data-tags**: Comma-separated keywords for search (include year, event type, people, location, etc.).
   - The text inside `<div class="poster-blank">...</div>` is shown as the "cover" for the audio in the gallery.

3. **(Optional) Use a custom poster image:**
   - If you want a custom image as the audio poster, you can use an `<img>` tag instead of the default blank box:
     ```html
     <div class="audio-poster"
          data-title="Grandpa's Stories 2020"
          data-synopsis="Grandpa shares memories from his childhood and family history."
          data-audio="grandpa-stories-2020.mp3"
          data-tags="grandpa,2020,oral history,stories,elders,interview">
       <img src="/assets/img/grandpa-2020-thumb.jpg" alt="Grandpa's Stories 2020" class="poster-image"/>
     </div>
     ```
   - Make sure to add your poster image to the appropriate folder (e.g., `assets/img/`).

4. **Test your addition:**
   - Run the site locally (see instructions above).
   - Search for your audio using the search bar.
   - Click the poster to open the modal and verify the title, synopsis, and tags.
   - (If you implement playback) Make sure the audio plays correctly.

5. **Commit and push your changes:**
   - After confirming everything works, save your changes and upload them to the repository.

**Summary Checklist:**
- [ ] Place audio file in the `assets/audio/` folder
- [ ] Add a `<div class="audio-poster" ...>` block in `_pages/audio-archive.md` under the correct category
- [ ] Fill in `data-title`, `data-synopsis`, `data-audio`, and `data-tags`
- [ ] (Optional) Add a custom poster image
- [ ] Test locally
- [ ] Commit and push your changes

If you want to automate or further enhance this process (e.g., with thumbnails or a CMS), ask Alexander or another technical family member for help!

## How to Add a New Photo Album to the Archive

If you want to add a new photo album to the archive yourself, follow these steps:

1. **Prepare your image files:**
   - Convert your images to `.jpg`, `.jpeg`, or `.png` format for best compatibility.
   - Place all the images for your album in the `assets/img/` folder (create this folder if it doesn't exist).
   - Example: `assets/img/family-reunion-1998-1.jpg`, `assets/img/family-reunion-1998-2.jpg`, `assets/img/family-reunion-1998-3.jpg`

2. **Add an album entry to the archive page:**
   - Open the file `_pages/image-archive.md` in a text editor.
   - Find the section for the correct category (Family Events, Portraits, etc.).
   - Add a new block like this inside the appropriate `<div class="album-carousel" ...>`:
     ```html
     <div class="album-card"
          data-title="Family Reunion 1998"
          data-description="A heartwarming look back at the 1998 family reunion in the old backyard."
          data-cover="family-reunion-1998-1.jpg"
          data-images='["family-reunion-1998-1.jpg","family-reunion-1998-2.jpg","family-reunion-1998-3.jpg"]'
          data-tags="reunion,1998,backyard,family event,celebration">
       <img src="/assets/img/family-reunion-1998-1.jpg" alt="Family Reunion 1998" class="album-thumb"/>
       <div class="album-title">Family Reunion 1998</div>
     </div>
     ```
   - **data-title**: The display title of the album (e.g., "Family Reunion 1998").
   - **data-description**: A short description of the album.
   - **data-cover**: The filename of the cover image (should match one of the images in the album).
   - **data-images**: A JSON array of all image filenames in the album (use double quotes inside the array, as shown above).
   - **data-tags**: Comma-separated keywords for search (include year, event type, people, location, etc.).
   - The `<img ...>` tag displays the album cover in the gallery.

3. **Test your addition:**
   - Run the site locally (see instructions above).
   - Search for your album using the search bar.
   - Click the album card to open the popup and verify the images, title, description, and tags.
   - Click any image in the popup to open the full-size image in a new tab.

4. **Commit and push your changes:**
   - After confirming everything works, save your changes and upload them to the repository.

**Summary Checklist:**
- [ ] Place all album images in the `assets/img/` folder
- [ ] Add a `<div class="album-card" ...>` block in `_pages/image-archive.md` under the correct category
- [ ] Fill in `data-title`, `data-description`, `data-cover`, `data-images`, and `data-tags`
- [ ] Test locally
- [ ] Commit and push your changes

If you want to automate or further enhance this process (e.g., with automatic thumbnails or a CMS), ask Alexander or another technical family member for help!

---

## Privacy & Family-Only Use

- This archive is for our family only. Please do not share the link or content outside the family without permission.
- Respect everyone's privacy—ask before sharing photos or stories about others.
- All original documents and photos remain with their owners; digital copies are for our family's history.

---

## Need Help?

- **If you're stuck, confused, or something isn't working:**
  - Contact Alexander Laurence (if available)
  - Or, ask another family member who is comfortable with computers
  - Or, leave a note in the archive for future maintainers

---

## Preserving the Archive for the Future

- If you want to make sure the archive is never lost:
  - Download a copy and keep it safe (on a USB drive, cloud storage, etc.)
  - Share a copy with other family members
  - Host it on your own GitHub account or website
- The more copies we have, the safer our memories will be!

---

*This archive is made with love for the Laurence family. Let's keep our stories alive for generations to come.*
