function BioSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          À propos de Léo
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Artist photo */}
          <div className="order-2 md:order-1">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/artist-photo.svg"
                alt="Léo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="order-1 md:order-2 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Léo explore un univers entre électro et introspection, 
              mêlant textures modernes et mélodies sincères.
            </p>
            <p>
              Ce premier EP traduit une recherche d'équilibre entre 
              énergie brute et poésie sonore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioSection;
