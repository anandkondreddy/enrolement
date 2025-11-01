import React from "react";
import {
  FlaskConical,
  Building2,
  HeartPulse,
  Globe,
  Target,
  Rocket,
} from "lucide-react";

const highlights = [
  {
    icon: <FlaskConical className="w-12 h-12 text-blue-900" />,
    title: "The Journey from Lab to Life",
    description: (
      <ul className="list-disc list-inside text-gray-700 text-base space-y-2 leading-relaxed">
        <li>Early Bench Work: experimental models in cardiac, renal, hepatic, pancreatic and dermal regeneration.</li>
        <li>Bedside Translation: refinement into bedside clinical methodology for end-stage disease management.</li>
        <li>Systems Integration: AI-enabled pulse diagnostics via Docture-Poly™ and VPK-42.</li>
        <li>Educational Expansion: co-branded certifications with IIT Hyderabad and IPSA Academy.</li>
        <li>Global Network: partnerships across India, Europe and the US under NIMA–VAP–CCIM initiatives.</li>
      </ul>
    ),
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-900" />,
    title: "Institutional Collaborations",
    description: (
      <ul className="list-disc list-inside text-gray-700 text-base space-y-2 leading-relaxed">
        <li>IIT Hyderabad – Academic partner for translational modules & bioinformatics.</li>
        <li>IPSA Academy / SGP – Clinical & Ayurvedic training.</li>
        <li>NIMA – Network expansion for registered Ayurvedic doctors.</li>
        <li>CCIM – Alignment with Ayush curricula.</li>
        <li>VAP – Advisory body for regenerative research ethics.</li>
      </ul>
    ),
  },
  {
    icon: <HeartPulse className="w-12 h-12 text-blue-900" />,
    title: "Our Ethos",
    description: (
      <div className="text-gray-700 text-base leading-relaxed text-center space-y-3">
        <p className="font-semibold">Truth. Transparency. Translational Integrity.</p>
        <p className="italic">
          “At i-PRISM, we teach not just how to treat disease, but how to re-establish life force balance within the system.”
        </p>
        <p className="text-sm font-medium">— Dr. Divya Sharma, PRISM Research Director</p>
      </div>
    ),
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-900" />,
    title: "Governance & Clinical Network",
    description: (
      <p className="text-gray-700 text-base leading-relaxed text-center">
        i-PRISM operates under Sai Ganga Panakeia Ltd., following Ayush and ethical research standards.  
        Each PRISM Clinic integrates Docture-Poly™ ERP and QA/SOP frameworks to ensure standardized care and documentation.
      </p>
    ),
  },
  {
    icon: <Target className="w-12 h-12 text-blue-900" />,
    title: "Our Vision",
    description: (
      <p className="text-gray-700 text-base leading-relaxed text-center">
        To make regeneration not an exception, but a standard of care—uniting Ayurveda, quantum biophysics and systems biology into a measurable science of healing.
      </p>
    ),
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-900" />,
    title: "Our Mission",
    description: (
      <ul className="list-disc list-inside text-gray-700 text-base space-y-2 leading-relaxed">
        <li>Advance translational Ayurvedic science through regeneration-focused research.</li>
        <li>Educate and certify clinicians in polyscientific systems medicine.</li>
        <li>Develop digital tools for quantifying homeostasis and resonance.</li>
        <li>Create sustainable franchise clinics for integrative care.</li>
        <li>Build a global research network linking Ayurveda and biomedicine.</li>
      </ul>
    ),
  },
];

const ConferenceHighlights: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <h2 className="text-5xl font-bold text-blue-900 text-center mb-16">
          i-PRISM Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-2xl rounded-3xl p-10 border-t-8 border-yellow-400 hover:shadow-3xl transition duration-300 min-h-[420px] flex flex-col items-center"
            >
              <div className="flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
                {item.title}
              </h3>
              <div className="text-center">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceHighlights;
