
const About = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Fundadores</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="text-center p-6 bg-gray-700 rounded-lg shadow-lg">
          <img src="https://i.pravatar.cc/150?u=alejandro" alt="Alejandro Picallo" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500" />
          <h3 className="text-2xl font-bold text-white">Alejandro Picallo</h3>
        </div>
        <div className="text-center p-6 bg-gray-700 rounded-lg shadow-lg">
          <img src="https://i.pravatar.cc/150?u=carlos" alt="Carlos Moreno" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500" />
          <h3 className="text-2xl font-bold text-white">Carlos Moreno</h3>
        </div>
      </div>
    </div>
  </section>
);

export default About;
