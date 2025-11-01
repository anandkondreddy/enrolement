import React from 'react';
import { Heart, Infinity, BrainCircuit, Sparkles } from 'lucide-react';

export default function About() {
  const philosophyPoints = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Vatha – The Resonance of Compassion",
      description:
        "Symbolizes the nurturing vibrational field of pure empathy — the emotional intelligence of healing.",
    },
    {
      icon: <Infinity className="w-8 h-8" />,
      title: "Pitta – The Force of Alignment",
      description:
        "Represents focused devotion — the harmonizing intent that brings coherence between mind and matter.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Kapha – The Pulse of Regeneration",
      description:
        "Reflects the living oscillation that restores rhythm and cellular vitality through dynamic balance.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* H1 – Our Story */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Story
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-8">
            From Ayurvedic Homeostasis to Polyscientific Regeneration
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-blue-900">i-PRISM</span> —{" "}
            <span className="font-semibold text-blue-900">
              Polyscientific Regenerative Integrative Systems Medicine
            </span>{" "}
            — emerged from decades of research bridging ancient homeostatic science with contemporary
            regenerative biology. Founded under{" "}
            <span className="font-semibold text-blue-900">Sai Ganga Panakeia (SGP)</span> by{" "}
            <span className="font-semibold text-blue-900">Dr. Ravishankar Polisetty</span>, the
            movement has evolved into a complete{" "}
            <span className="font-semibold text-yellow-500">
              academic + clinical + technological ecosystem
            </span>{" "}
            that now collaborates with{" "}
            <span className="font-semibold text-blue-900">IIT Hyderabad</span>,{" "}
            <span className="font-semibold text-blue-900">NIMA</span>,{" "}
            <span className="font-semibold text-blue-900">VAP</span> and{" "}
            <span className="font-semibold text-blue-900">CCIM</span> to redefine systems medicine.
          </p>
        </div>

        {/* H2 – The Philosophy of 1 : 1 : 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              The Philosophy of <span className="text-yellow-400">1 : 1 : 1</span>
            </h2>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The principle of <span className="font-semibold text-blue-900">Vatha–Pitta–Kapha</span>{" "}
              explains the living resonance that maintains health at both the cellular and systemic
              levels. When this triple balance — the{" "}
              <span className="font-semibold text-yellow-500">1 : 1 : 1 ratio</span> — is disturbed,
              disease appears; when restored, regeneration begins. This paradigm reframes pathology not
              as damage control but as{" "}
              <span className="font-semibold text-blue-900">
                dynamic re-equilibration — the essence of i-PRISM’s regenerative logic.
              </span>
            </p>
          </div>

          {/* Philosophy points */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            {philosophyPoints.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center text-yellow-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
