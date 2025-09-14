import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal site built with React + Tailwind.",
      link: "#",
    },
    {
      title: "Weather App",
      description: "Fetches live weather data using an API.",
      link: "#",
    },
    {
      title: "Task Manager",
      description: "A simple to-do app with CRUD features.",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
