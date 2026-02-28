interface Props {
  data: {
    address: string;
    emails: string[];
    hours: string[];
  };
}

export default function ContactInfo({ data }: Props) {
  return (
    // <section className="relative -mt-16 z-10">
      // <div className="max-w-6xl mx-auto px-6">
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Our Address
            </h3>
            <p className="text-gray-500 text-sm">
              {data.address}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Email Address
            </h3>

            {data.emails.map((email) => (
              <p key={email}>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-500 text-sm hover:text-indigo-600"
                >
                  {email}
                </a>
              </p>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Hours of Operation
            </h3>

            {data.hours.map((hour) => (
              <p key={hour} className="text-gray-500 text-sm">
                {hour}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}