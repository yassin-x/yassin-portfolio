import React, { useEffect, useState } from "react";

export default function WorkSpace() {
  const [repos, setRepos] = useState([]);
  const [visibleRepos, setVisibleRepos] = useState(25);

  useEffect(() => {
    fetch("https://api.github.com/users/yassin-x/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  const loadMoreRepos = () => {
    setVisibleRepos((prevVisibleRepos) => prevVisibleRepos + 25);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl p-8 rounded-lg shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center text-[#F2613F]">
          GitHub Repos - yassin-x
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {repos.slice(0, visibleRepos).map((repo) => (
            <div
              key={repo.id}
              className="p-4 rounded-lg shadow-lg bg-[#1C1C1C]"
            >
              <h2 className="mb-2 text-xl font-bold text-white">{repo.name}</h2>
              <p className="mb-4 text-gray-200">{repo.description}</p>

              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#9B3922] text-white py-2 rounded hover:bg-red-700"
                >
                  Visit Website
                </a>
              )}

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 mt-2 text-center text-white bg-[#481E14] rounded hover:bg-[#9B3922]"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {visibleRepos < repos.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMoreRepos}
              className="px-4 py-2 text-white bg-[#9B3922] rounded hover:bg-[#F2613F]"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
