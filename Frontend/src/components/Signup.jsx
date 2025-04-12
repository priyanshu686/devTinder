import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    DOB: "",
    gender: "",
    Password: "",
    TechnicalSkills: "",
  });

  useEffect(() => {
    // Start the camera
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  const capturePhoto = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const imageDataURL = canvas.toDataURL("image/jpeg");

    // Convert base64 to Blob
    const blob = await (await fetch(imageDataURL)).blob();
    const formData = new FormData();
    formData.append("photo", blob, "photo.jpg");

    // Upload to backend
    const res = await axios.post("http://localhost:7777/auth/signup", formData);
    setPhotoUrl(res.data.url);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const combinedFormData = new FormData();
      combinedFormData.append("photo", photoUrl);
      Object.keys(formData).forEach((key) => {
        combinedFormData.append(key, formData[key]);
      });

      const res = await axios.post("http://localhost:7777/auth/signup", combinedFormData);
      alert("Signup Successful!");
    } catch (err) {
      console.error(err);
      alert("Signup Failed: " + err.message);
    }
  };

  return (
    <div>
      <div className="card bg-base-100 flex text-neutral-content w-96 mx-auto">
        <div className="card-body justify-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full mb-2"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full mb-2"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mb-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="DOB"
              className="input input-bordered w-full mb-2"
              value={formData.DOB}
              onChange={handleChange}
              required
            />
            <select
              name="gender"
              className="select select-bordered w-full mb-2"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full mb-2"
              value={formData.Password}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="technicalSkills"
              placeholder="Technical Skills (comma-separated)"
              className="input input-bordered w-full mb-2"
              value={formData.TechnicalSkills}
              onChange={handleChange}
              required
            />
            <video ref={videoRef} autoPlay width="300" className="mb-2" />
            <button
              type="button"
              onClick={capturePhoto}
              className="btn btn-primary mb-2"
            >
              Capture Photo
            </button>
            <button type="submit" className="btn btn-success w-full">
              Signup
            </button>
          </form>
          <canvas ref={canvasRef} style={{ display: "none" }} />
          {photoUrl && (
            <div>
              <h3>Uploaded Photo:</h3>
              <img src={photoUrl} alt="Uploaded" width="300" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;