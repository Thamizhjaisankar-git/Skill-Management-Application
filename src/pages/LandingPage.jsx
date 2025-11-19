import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Empower Your Team with Skill Insights</h1>
          <p className="text-white/90 mb-8 text-lg">Admins can track trainee progress, identify skill gaps and help their team grow efficiently. Manage skills effortlessly with our intuitive dashboard.</p>
          <div className="flex justify-center md:justify-start gap-4">
            <button onClick={() => navigate("/signup")} className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
              Sign Up
            </button>
            <button onClick={() => navigate("/login")} className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition" >
              Login
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="admin Illustration" className="w-80 h-80"  />
        </div>
      </div>

      <div className="bg-white rounded-t-3xl mt-20 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center">
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition hover:bg-gray-100">
            <h2 className="text-xl font-bold mb-2">Track Skills</h2>
            <p>  Monitor trainee skill progress in real-time and identify areas needing improvement.</p>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition hover:bg-gray-100">
            <h2 className="text-xl font-bold mb-2">Analyze Performance</h2>
            <p>Gain insights into trainee performance with detailed analytics and reports.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
