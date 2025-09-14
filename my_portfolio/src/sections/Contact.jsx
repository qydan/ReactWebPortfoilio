export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-6">
          Interested in working together? Reach out!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
        >
          Send Email
        </a>
      </div>
    </section>
  )
}
