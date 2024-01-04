const Projects = () => {
  return (
    <div className="mt-24 mx-4 md:mx-36 text-center font-semibold">
      <p className="text-gray-600 my-2">Browse My Recent</p>
      <h1 className="text-4xl md:text-6xl my-2">Projects</h1>
      <div className="flex flex-col md:flex-row my-12 md:my-24 items-center">
        <div className="border-2 border-gray-400 p-4 mt-4 md:m-4 rounded-3xl">
          <img
            className="rounded-3xl my-2"
            src="/exam-portal-project.jpg"
            alt="Exam Portal Project"
          />
          <h1 className="text-2xl my-2">Exam Portal</h1>
          <div className="flex my-2">
            <button className="border-2 shadow-lg w-1/2 border-gray-400 py-3 px-5 rounded-full m-3">
              Github
            </button>
            <button className="border-2 shadow-lg w-1/2 border-gray-400 py-3 px-5 rounded-full m-3">
              Live
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-400 p-4 mt-4 md:m-4 rounded-3xl">
          <img
            className="rounded-3xl my-2"
            src="/youtube-clone-project.jpg"
            alt="Youtube Clone Project"
          />
          <h1 className="text-2xl my-2">Youtube Clone</h1>
          <div className="flex my-2">
            <button className="border-2 shadow-lg w-1/2 border-gray-400 py-3 px-5 rounded-full m-3">
              Github
            </button>
            <button className="border-2 shadow-lg w-1/2 border-gray-400 py-3 px-5 rounded-full m-3">
              Live
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-400 p-4 mt-4 md:m-4 rounded-3xl">
          <img
            className="rounded-3xl my-2"
            src="/microservices-project.jpg"
            alt="Microservices Project"
          />
          <h1 className="text-2xl my-2">Microservices CI/CD</h1>
          <div className="flex my-2">
            <button className="border-2 shadow-lg w-1/2 border-gray-400 py-3 px-5 rounded-full m-3">
              Github
            </button>
            <button className="border-2 shadow-lg w-1/2 border-gray-400 py-3 px-5 rounded-full m-3">
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
