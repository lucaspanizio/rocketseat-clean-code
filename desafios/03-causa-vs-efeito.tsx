// Causa vs Efeito
// https://efficient-sloth-d85.notion.site/Desafio-Causa-vs-Efeito-a664fd5596c8467f9d5d66f3043ac9c5

import { useEffect, useState } from "react";

interface GitHubUser {
  name: string;
  url: string;
}

function fetchGitHubUser() {
  return {
    data: {
      user: {
        name: "Joseph Oliveira",
        url: "https://github.com/josepholiveira",
      },
    },
  };
}

export function GitHubUserProfile() {
  const [shouldNotRenderGitHubUserData, setShouldNotRenderGitHubUserData] =
    useState(false);
  const [githubUserData, setGitHubUserData] = useState<GitHubUser>();

  useEffect(() => {
    function loadUser() {
      setShouldNotRenderGitHubUserData(true);

      const fetchGitHubUserResponse = fetchGitHubUser();
      const githubUser = fetchGitHubUserResponse.data.user;

      setGitHubUserData(githubUser);

      setShouldNotRenderGitHubUserData(false);
    }

    loadUser();
  });

  if (shouldNotRenderGitHubUserData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${githubUserData?.url}.png`} alt="" />
      <a href={githubUserData?.url}>{githubUserData?.name}</a>
    </div>
  );
}
