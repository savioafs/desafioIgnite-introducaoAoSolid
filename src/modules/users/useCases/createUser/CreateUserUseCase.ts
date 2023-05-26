import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const verifyEmail = this.usersRepository.findByEmail(email);

    if (verifyEmail) {
      throw new Error("Email already registred");
    }

    const createUser = this.usersRepository.create({
      email,
      name,
    });

    return createUser;
  }
}

export { CreateUserUseCase };
