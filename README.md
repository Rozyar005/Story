# 📚 Story: AI-Powered Narrative Generator

![Project Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![Language](https://img.shields.io/badge/language-HTML%20%7C%20CSS%20%7C%20JS-orange?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

## 📖 The Lowdown (Project Breakdown)
**Story** is an interactive web application designed to generate and share narratives. It combines a modern frontend interface with audio-visual elements to create an immersive storytelling experience.

Think of it as a digital campfire:
1.  **User Authentication**: Secure login and signup pages to personalize the experience.
2.  **AI Integration**: A dedicated interface (`AI.html`) that leverages logic to assist in generating or displaying stories.
3.  **Immersive Audio**: Integrated soundscapes (`Story_Sound`) to set the mood while reading or writing.

---

## 🛠️ Technical Specs (The Stack)

This project runs on standard web technologies, keeping it lightweight and fast.

| Component | Technology | Why it's here |
| :--- | :--- | :--- |
| **Core Structure** | **HTML5** | The skeleton of every page (`index.html`, `main.html`). |
| **Styling** | **CSS3** | Handles the visual theme (`style.css`, `signup.css`) |
| **Logic** | **JavaScript (ES6)** | Powers the interactivity, form validation, and audio control (`script.js`). |
| **Assets** | **MP3/WAV** | Audio files stored in `Story_Sound` for background ambience. |

---

## 📂 Project Structure

Here is how the project is organized so you can navigate it easily:

```text
Story/
├── 🎵 Story_Sound/       # Audio assets for background music/effects
├── 🖼️ img/               # Images and icons used in the UI
├── 📄 AI.html            # The interface for AI story generation
├── 📄 index.html         # The landing page (Start here)
├── 📄 login.html         # User login page
├── 📄 signup.html        # User registration page
├── 📄 main.html          # The main dashboard after logging in
├── 🎨 style.css          # Global styles
├── 🎨 signup.css         # Specific styles for auth pages
└── ⚙️ script.js          # Main logic file
