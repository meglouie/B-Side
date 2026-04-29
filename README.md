## HCI final project: B-Side

Names: Megan Louie, Khanh Ha Nguyen

## User Guide

**What is B-Side?**  
B-Side is a music community platform where you can discover albums, connect with other music lovers, join genre-based groups, and discuss music recommendations.

**How to Use:**

- **Home**: Browse featured albums and quick navigation to all sections
- **About**: Learn about the B-Side mission and meet the team
- **Albums**: Explore top community albums; listen via Spotify embeds
- **Artists**: Discover featured artists and music recommendations
- **Groups**: Join genre communities (Rock, Pop, Hip-Hop, Jazz, Classical, K-Pop, R&B) to connect with like-minded listeners
- **Discussion**: Create posts with tags (General, Album Talk, Artists, Recommendations) and like posts

## Technical Documentation

**How to Run:**

1. **Open the site in your browser:**
   - **On Mac/Linux:** Open Terminal, navigate to the project folder, then run `open home.html` (Mac) or `xdg-open home.html` (Linux)
   - **On Windows:** Open File Explorer, find `home.html`, right-click → "Open with" → choose your browser (Chrome, Firefox, Safari, or Edge)
   - **Alternative (all systems):** Drag `home.html` directly into your browser window
   - The site will load as a local file and you can navigate between pages using the navigation tabs
2. Static site—no backend or dependencies to install

**Tech Stack:**

- HTML5, CSS3, Vanilla JavaScript
- Spotify Web Embeds (requires internet connection)

**File Structure:**

- `home.html` → Home page
- `about.html`, `albums.html`, `artists.html`, `groups.html`, `discussion.html` → Feature pages
- `styles.css` → Global styling
- `discussion.js` → Post creation logic
- `groups/` → Genre group pages

**Color Palette**

- Navy Blue: #2F4156
- Sky Blue: #C8D9E3
- Azalea: #F7C9D4
- Pale Pink: #FFE1E6
- Beige: #F5EFEB
