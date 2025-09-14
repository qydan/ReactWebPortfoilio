export default function ProjectCard({ title, description, link }) {
  return (
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 my-2">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  )
}
