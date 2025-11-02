export const ItineraryLeave = () => {
  return (
    <section className="py-20 bg-background px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-bold text-black border-b-2 border-blue-600 inline-block pb-2">
            Sample itinerary : Luggage Drop Off 

          </h2>
          <p className="text-black/70 mt-4 max-w-3xl">
            Flying home or heading to your next destination? Here’s how TakeMyLuggage makes
            your departure seamless and stress-free.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Card 1 */}
          <div className="border-2 border-blue-600 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="/db0f8344-3342-4540-8e04-e90efd0ff729.png"
              alt="Flying out luggage collection"
              className="rounded-lg mb-4 w-full object-contain"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Flying Out?
            </h3>
            <p className="text-black/70 text-base leading-relaxed">
              We collect your luggage from your home or hotel and bring it to Dublin Airport, 
              so you don’t have to carry it on buses, trains or taxis.
              <br /><br />
              Save yourself time, stress and extra taxi costs — your bags will be delivered 
              safely while you get on with your day.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-blue-600 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="/1300ad6c-16d2-4cbf-b5a5-58ad7bb5a1f3.png"
              alt="We Store Your Bags Safely at Dublin Airport"
              className="rounded-lg mb-4 w-full object-contain"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              We Store Your Bags Safely at Dublin Airport
            </h3>
            <p className="text-black/70 text-base leading-relaxed">
              Your luggage is delivered to our trusted airport storage partner, 
              <span className="font-semibold"> Smarte Carte (Terminal 1)</span>.
              <br /><br />
              We seal, track, and securely hand over your bags.
              <br /><br />
              You’ll receive a manual update including a picture of your luggage in 
              storage once it’s checked in.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-blue-600 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src="/c0d176d7-99ae-4659-9e55-e5f2260bc284.png"
              alt="Pick Up Your Luggage at Terminal 1"
              className="rounded-lg mb-4 w-full object-contain"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Pick Up Your Luggage at Terminal 1
            </h3>
            <p className="text-black/70 text-base leading-relaxed">
              When you arrive at Dublin Airport, simply go to the Smarte Carte luggage 
              storage area in Terminal 1.
              <br /><br />
              Your luggage will be:
              <br />– Stored securely under your booking name/reference
              <br />– Ready for collection once you show your ID or booking confirmation
              <br /><br />
              No waiting in long queues or searching for your bags — just head to the 
              storage counter, show your details, and pick up your luggage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
