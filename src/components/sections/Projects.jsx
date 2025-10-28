import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skill Swap */}
            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h2 className="text-2xl font-bold mb-5">✨ SkillSwap</h2>
              <p className="text-gray-200 mb-4">
                🤝 A platform for exchanging skills with no money involved.
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>🔍 Skill-based user matching</li>
                <li>💬 Real-time chat (Socket.IO)</li>
                <li>🎥 One-on-one video calls (WebRTC)</li>
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href="https://skill-swap-client-sjuz.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* {Fashion arc} */}
            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h2 className="text-2xl font-bold mb-5">🛍️ FashionArc</h2>
              <p className="text-gray-200 mb-4">
                👗 A modern fashion e-commerce platform with a full-featured
                admin panel.
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>🛒 Product browsing, cart, and checkout flow</li>
                <li>
                  📦 Admin dashboard for managing products, orders, and users
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href="https://fashionarc.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Xora App */}
            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h2 className="text-2xl font-bold mb-5">📱 Xora</h2>
              <p className="text-gray-200 mb-4">
                🤖 A mobile app for uploading and sharing AI-generated short
                videos.
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>🎬 Upload and view AI-generated short videos.</li>
                <li>
                  💬 Generate Your Own Playlist of your favourite AI Generated
                  Videos
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/geekySahil/Xora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:orange-red-300 transition-colors my-4"
                >
                  View Git Repo →
                </a>
              </div>
            </div>

            {/* youtube backend */}
            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h2 className="text-2xl font-bold mb-5">🧰 YouTube Backend</h2>
              <p className="text-gray-200 mb-4">
                🎥 A Full Fledged API Almost Like youtube.
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>📤 Video upload with thumbnail support</li>
                <li>💬 Comment system with nested replies</li>
                <li>👍 Like/Dislike tracking for videos</li>
                <li>
                  📈 Likes, Views and Subscriptions count tracking per channel
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/geekySahil/videoTubeAPI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Git Repo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
