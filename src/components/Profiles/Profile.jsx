import React from "react";

const ProfilePage = () => {
  return (
    <div className="grid items-center h-[100vh] grid-col-1 md:grid-cols-12 gap-10 px-3 md:px-6 py-14 bg-gray-100">
      {/* Profile Section */}

      <div className="col-span-6 h-[26rem] p-6 bg-white rounded-lg  relative">
        <h1 className="absolute left-0 text-2xl font-semibold text-black md:text-3xl -top-10">
          Mein Profil
        </h1>

        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="https://imgcdn.stablediffusionweb.com/2024/5/3/f9a131d6-371f-447a-a048-a69880afe821.jpg"
              alt="Profile"
              className="object-cover w-24 h-24 rounded-full md:w-32 md:h-32"
            />
            <button className="absolute bottom-0 right-0 p-2 text-white bg-[#0380CA] rounded-full">
              <img src="/images/camera.png" className="w-3 md:w-5" />
            </button>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-black md:text-2xl">
            Name des Managers
          </h3>
          <p className="text-xl text-black">Admin</p>
        </div>
        <div className="mt-6 text-sm">
          <p>
            <span className="text-lg text-black">Ihre E-Mail:</span> <br></br>{" "}
            hellobesnik@gmail.com
          </p>
          <p className="mt-2 text-black">
            <span className="text-lg text-black">Telefonnummer:</span> <br></br>{" "}
            <b>+1 (419) 405-7399</b>
          </p>
        </div>
      </div>

      {/* Password Update Section */}
      <div className="col-span-6 h-[26rem] p-6 bg-white rounded-lg ">
        <h3 className="mb-4 text-xl font-semibold text-center text-black md:text-2xl">
          Passwort aktualisieren
        </h3>
        <form className="w-full space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Altes Passwort
            </label>
            <input
              type="password"
              placeholder="Geben Sie Ihr Passwort ein"
              className="w-full p-2 text-black bg-gray-100 border rounded-full "
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Neues Passwort
            </label>
            <input
              type="password"
              placeholder="Geben Sie Ihr neues Passwort ein"
              className="w-full p-2 text-black bg-gray-100 border rounded-full "
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Geben Sie das neue Passwort erneut ein
            </label>
            <input
              type="password"
              placeholder="Geben Sie Ihr neues Passwort ein"
              className="w-full p-2 text-black bg-gray-100 border rounded-full "
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mx-auto p-2 mt-10 text-white bg-[#0380CA] rounded-md hover:bg-blue-700"
            >
              Passwort aktualisieren
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
