🚀 QuickPaste: The Developer's Instant Clipboard
QuickPaste is a high-performance, full-stack snippet management tool. It eliminates the friction of sharing raw code by providing instant persistence, syntax highlighting, and a sleek, animated user experience.

⚡ Key Highlights
🎨 Glassmorphic UI: Built with Tailwind CSS and Framer Motion for smooth, physics-based transitions.

🌈 Syntax Highlighting: Auto-detection for multiple languages (Java, Python, JS, etc.).

🔗 Instant Permalinks: Generate unique, obfuscated IDs for secure and easy sharing.

📱 Edge-to-Edge Responsive: Optimized for everything from 4K monitors to mobile screens.

⚙️ Robust Backend: Powered by Spring Boot for enterprise-grade scalability and RESTful efficiency.

🏗 System Architecture
The application follows a decoupled client-server architecture:

Client: Handles UI state, animations, and syntax rendering.

API: Manages business logic, snippet validation, and URL generation.

Persistence: MongoDB stores snippets as flexible BSON documents for high read-write speeds.

🛠 Tech Stack Deep Dive
Frontend (The Experience)
React.js: Component-based architecture for a modular UI.

Framer Motion: Used for layout animations and micro-interactions.

Tailwind CSS: For a utility-first, lightning-fast styling workflow.

Backend (The Engine)
Spring Boot (Java): Handling the heavy lifting with high concurrency support.

Spring Data MongoDB: Seamless integration with our NoSQL data layer.

Lombok: To keep the Java boilerplate code to a minimum.



🚀 Getting Started
1. Clone the Repository
Bash
git clone https://github.com/yourusername/QuickPaste.git
cd QuickPaste
2. Launch the Backend (Spring Boot)
Ensure you have JDK 17+ and Maven installed.

Bash
cd backend
mvn clean install
mvn spring-boot:run
3. Launch the Frontend (React)
Bash
cd frontend
npm install
npm start
