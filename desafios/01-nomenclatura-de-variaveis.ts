// Nomenclatura de variáveis
// https://efficient-sloth-d85.notion.site/Desafio-Nomea-o-de-vari-veis-0a8484a8cdc743558d6677910590a874

const categories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

async function getUserCategoryOnGitHub(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubAPIResponse = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (githubAPIResponse.status === 404) {
    return {
      statusCode: 400,
      message: `User with username "${githubUsername}" not found`
    }
  }

  const userDataGithub = await githubAPIResponse.json()

  const orderedCategories = categories.sort((categoryA, categoryB) =>  categoryB.followers - categoryA.followers); 

  const categoryUser = orderedCategories.find(category => userDataGithub.followers > category.followers)

  const result = {
    username: githubUsername,
    category: categoryUser.title ?? "Does not fit into any category"
  }

  return result
}

getUserCategoryOnGitHub({ query: {
  username: 'josepholiveira'
}}, {}).then((githubUserAndCategory) => {
    console.log(githubUserAndCategory)
  }
)