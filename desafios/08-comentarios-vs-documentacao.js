// Comentários vs Documentação
// https://efficient-sloth-d85.notion.site/Desafio-Coment-rios-vs-Documenta-o-6660d7d60c884b91b0f76de6c6b8ecde

async function registerUser(data) {
  const { email, name, avatar } = data
  
  const noAvatarGiven = !avatar;
  if (noAvatarGiven) return { error: 'avatar is required' }

  const noNameGiven = !name;
  if (noNameGiven) return { error: 'name is required' }

  const registeredUser = getUserByEmail(email)
  if (registeredUser) return { error: 'email already used' }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatarInJPGFormat = convertImageToJPG(avatar)

  // Cria o usuário no banco de dados
  const user = await createUser({ email, name, avatar: avatarInJPGFormat })

  return { user }
}