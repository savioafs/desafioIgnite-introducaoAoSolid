import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userFind = this.usersRepository.findById(user_id);

    if (!userFind) {
      throw new Error("User not found");
    }

    userFind.admin = true;

    return userFind;
  }
}

export { TurnUserAdminUseCase };
