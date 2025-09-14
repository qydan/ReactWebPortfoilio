export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-black-50"
    >
      <h1 className="text-5xl text-black-700 font-bold mb-4">
        Hi, I'm Aydan 👋
      </h1>
      <p className="text-lg text-white-700 mb-6">
        3rd Year Software Engineering Student @ Carleton University
      </p>
      <a
        href="#projects"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
      >
        See My Work
      </a>
    </section>
  )
}
