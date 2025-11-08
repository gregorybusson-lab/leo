function BioSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-16">
          À PROPOS DE LÉO
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Artist photo */}
          <div className="order-2 md:order-1">
            <div className="relative">
              {/* Halo externe très large - pulse lent */}
              <div 
                className="absolute -inset-32 bg-gradient-to-r from-emerald-500/15 via-white/10 to-teal-500/15 
                           rounded-[4rem] blur-[100px]"
                style={{
                  animation: 'slowGlow 7s ease-in-out infinite'
                }}
              ></div>
              
              {/* Halo moyen */}
              <div 
                className="absolute -inset-20 bg-gradient-to-r from-emerald-500/20 via-white/15 to-teal-500/20 
                           rounded-[3rem] blur-[80px]"
                style={{
                  animation: 'slowGlow 7s ease-in-out infinite 2.3s'
                }}
              ></div>
              
              {/* Halo proche */}
              <div 
                className="absolute inset-0 bg-white/20 blur-3xl scale-110 animate-pulse"
              ></div>
              
              {/* Photo avec effet hover */}
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl group">
                <img
                  src="/artist-photo.jpg"
                  alt="Léo"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="order-1 md:order-2 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Léo explore une zone trouble entre rap et électro, là où les mots deviennent matière sonore.
            </p>
            <p>
              Ses morceaux questionnent la vie, le doute, la recherche d'un sens quand tout semble flou.
            </p>
            <p>
              Entre machines, mélodies vaporeuses et textes à vif, il construit un univers où l'introspection se mêle à la pulsation.
            </p>
            <p>
              Son premier EP, <span className="font-script text-emerald-400">Orphée</span>, traduit ce tiraillement entre lumière et ombre — la traversée d'un jeune artiste qui cherche à comprendre avant de vouloir convaincre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioSection;
