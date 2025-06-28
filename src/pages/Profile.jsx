import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [bio, setBio] = useState(localStorage.getItem("bio") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [xp, setXp] = useState(520);
  const level = Math.floor(xp / 100);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("bio", bio);
    localStorage.setItem("avatar", avatar);
  }, [name, bio, avatar]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6"
    >
      <h2 className="text-3xl font-bold mb-6">Your Profile</h2>

      <div className="flex flex-col items-center gap-4">
        <label className="cursor-pointer relative">
          <img
            src={avatar || "/default-avatar.png"}
            alt="avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-pink-500"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 opacity-0"
          />
        </label>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 p-2 rounded border w-full text-center"
        />

        <textarea
          placeholder="Short Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="mt-2 p-2 rounded border w-full text-center"
        />

        <div className="w-full mt-6">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold">XP: {xp}</span>
            <span className="text-sm bg-pink-200 text-pink-700 px-3 py-1 rounded-full">
              Level {level}
            </span>
          </div>
          <div className="w-full h-4 bg-gray-200 rounded">
            <div
              className="h-full bg-pink-500 rounded"
              style={{ width: `${xp % 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
