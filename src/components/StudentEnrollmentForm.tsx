import React, { useState } from "react";
import axios from "axios";

const StudentEnrollmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    dob: "",
    gender: "",
    college: "",
    department: "",
    year_of_study: "",
    course: "",
    address: "",
    // studentId: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, studentId: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone_number", formData.phone_number);
      payload.append("dob", formData.dob);
      payload.append("gender", formData.gender);
      payload.append("college", formData.college);
      payload.append("department", formData.department);
      payload.append("year_of_study", formData.year_of_study);
      payload.append("course", formData.course);
      payload.append("address", formData.address);
      // For now we are not sending studentId (image)
      // payload.append("studentId", formData.studentId);

      const res = await axios.post(
        "https://enrolement-backend.onrender.com/students/register",
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Response:", res.data);
      alert("Enrollment submitted successfully 🎉");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        dob: "",
        gender: "",
        college: "",
        department: "",
        year_of_study: "",
        course: "",
        address: "",
        // studentId: null,
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert(error.response?.data?.detail || "Failed to submit enrollment");
    }
  };

  return (
    <section
      id="enroll"
      className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-6"
    >
      <div className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Student Enrollment Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Academic Info */}
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              name="course"
              placeholder="Course (e.g., B.Tech, B.Sc, M.Sc)"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <select
            name="year_of_study"
            value={formData.year_of_study}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Year of Study</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="address"
            placeholder="Permanent Address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* File Upload */}
          {/* <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Upload Student ID Card
            </label>
            <input
              type="file"
              name="studentId"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-lg"
            />
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </section>
  );
};

export default StudentEnrollmentForm;
