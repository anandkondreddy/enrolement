import React from "react";
import brochure from '../assets/brochure.pdf';

const OpportunitiesAndRegistration: React.FC = () => {
  return (
    <section id="opportunities-registration" className="bg-gradient-to-br from-yellow-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">

        {/* Business & Career Opportunities */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-3">Business and Career Opportunities</h2>
          <p className="text-gray-700 mb-10">
            The conference showcases numerous pathways for professional growth and business development in the
            integrative healthcare sector.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Franchise column */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Novadigm Clinics – SGP Hospitals Franchise
              </h3>
              <p className="text-gray-700 mb-6">
                One of the most exciting opportunities presented at the conference is the chance to become part of the
                Novadigm Clinics network under SGP Hospitals. This established franchise model offers:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Turnkey clinic setup</span> with standardized PRISM Medicine protocols
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Comprehensive training</span> for practitioners and support staff
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Digital health infrastructure</span> with integrated EMR and diagnostic tools
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Marketing and branding support</span> to build patient awareness
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Supply chain access</span> for specialized integrative medicine products
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Ongoing clinical support</span> from expert practitioners
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-gray-700">
                Conference attendees will have exclusive access to special franchise terms and priority location
                selection. Representatives will be available throughout the event to discuss personalized franchise
                options.
              </p>
            </div>

            {/* Additional opportunities column */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Additional Opportunities</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Employment positions in existing integrative facilities
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Research collaborations with academic institutions
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Digital health startups in the integrative space
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Product development partnerships
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Training and education ventures
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OpportunitiesAndRegistration;
