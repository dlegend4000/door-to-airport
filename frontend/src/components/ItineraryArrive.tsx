export const ItineraryArrive = () => {
  return (
    <section className="py-20 bg-background px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-bold text-black border-b-2 border-blue-600 inline-block pb-2">
            Sample Itinerary : Same-day delivery service 
          </h2>
          <p className="text-black/70 mt-4 max-w-3xl">
            Here’s how your journey looks when using our luggage delivery service upon arriving in Dublin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Card 1 */}
          <div className="border-2 border-blue-600 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="/36a0cafe-4c72-4fb4-bef0-e2720c885ae3.png"
              alt="Arrive at Dublin Airport"
              className="rounded-lg mb-4 w-full object-contain"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Arrive at Dublin Airport
            </h3>
            <p className="text-black/70 text-base leading-relaxed">
              Once you land at Dublin Airport, simply hand over your luggage to our team or our partners at 
              <span className="font-semibold"> Smarte Carte (Terminal 1)</span>. We’ll securely transport it to your hotel, Airbnb, or home so you can enjoy a luggage-free day.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-blue-600 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="/698b8736-6845-46f7-80de-1301ea363cd2.png"
              alt="Explore Dublin or Head Home"
              className="rounded-lg mb-4 w-full object-contain"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Explore Dublin or Head Home, Without the Bags
            </h3>
            <p className="text-black/70 text-base leading-relaxed">
              Whether you live in Ireland or you’re just visiting, you no longer have to waste time dragging luggage to your hotel or back home.
              <br /><br />
              <span className="font-semibold">Arriving as a tourist?</span> Drop your luggage at Dublin Airport and go straight into the city. 
              We'll deliver it to your hotel or Airbnb.
              <br /><br />
              <span className="font-semibold">Live in Ireland?</span> After your flight lands, skip the hassle of hauling heavy bags home. 
              We can deliver them to your house while you head straight to work, rest, or meet friends.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-blue-600 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="/a6976e5e-7f3e-4410-86b4-fc241b74636f.png"
              alt="Arrive First, Bags Follow"
              className="rounded-lg mb-4 w-full object-contain"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Arrive First — Your Bags Follow Shortly After
            </h3>
            <p className="text-black/70 text-base leading-relaxed">
              <span className="font-semibold">For tourists:</span> We deliver your luggage to your hotel or Airbnb within 2–6 hours, 
              depending on the service you choose.
              <br /><br />
              <span className="font-semibold">For residents in Ireland:</span> Flying back home? 
              We can deliver your bags to your house after you land so you don’t have to carry them on buses, trains or taxis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
