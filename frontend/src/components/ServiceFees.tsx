export const ServiceFees = () => {
  return (
    <section className="py-20 bg-background px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-black border-b-2 border-blue-600 inline-block pb-2 mb-4">
          Examples of Service Fees
        </h2>

        {/* Subtitle */}
        <p className="text-black/70 text-lg mb-12">
          When you send your luggage from the airport to your hotel or home.
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/9daaf6b4-68ad-41b8-bc8f-eb6c5119cf52.png"
            alt="Examples of Service Fees"
            className="rounded-lg w-full max-w-3xl object-contain shadow-sm"
          />
        </div>

        {/* Notes */}
        <div className="text-black/60 text-sm mt-10 leading-relaxed">
          <p>* Fees vary depending on the delivery zone and may be subject to delays.</p>
          <p>* Check rates in euros, pounds, or dollars.</p>
        </div>
      </div>
    </section>
  );
};
