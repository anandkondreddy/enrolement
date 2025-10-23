import React from "react";
import courcebroucher1 from "../assets/Course Brochure.pdf";
import courcebroucher2 from "../assets/Cerification Course Brochure.pdf"; 
// If brochures are in src/assets, import them like this:
// import brochure1 from "../assets/course-brochure1.pdf";
// import brochure2 from "../assets/course-brochure2.pdf";

export default function VideosSection() {
  return (
    <section
      id="videos"
      className="from-yellow-400 to-blue-50 text-blue-700 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">About Course</h2>

        {/* Grid for Videos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Video 1 */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MhguNfKV-Vs?controls=1&autoplay=0"
              title="Course Highlight 1"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Rijc89N1zOE?controls=1&autoplay=0"
              title="Conference Highlight 2"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Brochures Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">
            Download Course Brochure
          </h3>
          <div className="flex justify-center gap-6">
            {/* Brochure 1 */}
            <a
              href={courcebroucher1} // Or use {brochure1} if imported
              download
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Course Brochure 
            </a>

            {/* Brochure 2 */}
            {/* <a
              href={courcebroucher2} // Or use {brochure2} if imported
              download
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Certification Course Brochure 
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
