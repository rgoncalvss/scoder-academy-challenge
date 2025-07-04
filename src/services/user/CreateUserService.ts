import { CreateUserDto, CreateUserData } from "@interfaces/user/ICreateUser";
import { CreateUserRepository } from "@repositories/user/CreateUserRepository";
import { GetUserRepository } from "@repositories/user/GetUserRepository";
import { UserStatusEnum } from "@enums/UserStatusEnum";
import { HTTPError } from "@config/errors";
import { hash } from "bcryptjs";

export class CreateUserService {
  private createUserRepository: CreateUserRepository;
  private getUserRepository: GetUserRepository;

  constructor(
    createUserRepository: CreateUserRepository,
    getUserRepository: GetUserRepository
  ) {
    this.createUserRepository = createUserRepository;
    this.getUserRepository = getUserRepository;
  }

  async execute(createUserDto: CreateUserDto) {
    const userData: CreateUserData = {
      ...createUserDto,
    };

    return this.createUserRepository.execute(userData);
  }
}
