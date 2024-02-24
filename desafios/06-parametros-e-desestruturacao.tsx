// Parâmetros e desestruturação
// https://efficient-sloth-d85.notion.site/Desafio-Par-metros-e-Desestrutura-o-e7b4ac605bf9467da7b032573bc8adb9

interface IUser {
  id: number;
  name: string;
  height: number;
  hasTicket: boolean;
}

interface IUpdateUserRequest {
  body: Omit<IUser, "id">;
  params: {
    id: number;
  };
}

const userRepository = {
  update: (user: IUser) => {},
};

function updateUserRoute(data: IUpdateUserRequest) {
  const { body, params } = data;
  updateUserController(data);
}

function updateUserController(data: IUpdateUserRequest) {
  const user = { id: data.params.id, ...data.body };
  userRepository.update(user);
}
