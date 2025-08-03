import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projectList = [
    {
      title: "FlashStudy Cards",
      description:
        "Built an interactive Flash Study Cards app with customizable decks, progress tracking, and a clean, user-friendly interface for efficient learning.",
      tech: ["React", "Node.js", "MongoDB", "Python"],
      liveUrl: "https://flashstudy-dev.vercel.app/", // replace with actual
      repoUrl: "https://github.com/pynum/flashcards", // replace with actual
    },
    {
      title: "Food Delivery Website",
      description:
        "Full-stack Food Delivery Website with secure online payment integration and admin dashboard for managing restaurants, menus, and orders.",
      tech: ["MERN Stack", "Stripe", "Express", "MongoDB"],
      //liveUrl: "https://your-food-delivery-live.com", // replace with actual
     repoUrl: "https://github.com/pynum/flashcards", // replace with actual
    },
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      tech: [ "MERN Stack", "Stripe", "MongoDB","Socket.io"],
      // liveUrl: "https://your-ecommerce-live.com", // replace with actual
      repoUrl: "https://github.com/Tahreem-1238/MultiVendor-Final", // replace with actual
    },
    {
      title: "AI ChatBOT",
      description:
        "Developed a simple AI Chatbot capable of answering user queries and engaging in basic conversations, enhancing user interaction with quick responses.",
      tech: ["OpenAI", "Express", "React", "Node.js", "AI"],
      liveUrl: "https://ai-chat-bot-coral-sigma.vercel.app/", // replace with actual
      repoUrl: "https://github.com/pynum/Ai-ChatBot/tree/master", // replace with actual
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((proj) => (
              <div
                key={proj.title}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-400 mb-4">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap items-center">
                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                    >
                      View Live →
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Live soon</span>
                  )}

                  {proj.repoUrl ? (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                    >
                      View Code →
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Code soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
