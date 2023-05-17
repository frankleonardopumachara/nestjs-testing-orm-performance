import * as faker from "@faker-js/faker";
import { User } from "./typeorm/entities/user.entity";
import { Profile } from "./typeorm/entities/profile.entity";

// generate users profiles
export const profiles: Partial<Profile>[] = [];

for (let i = 0; i < 1000000; i++) {
  profiles.push({
    id: undefined,
    deletedAt: undefined,
    editedAt: undefined,
    createdAt: undefined,
    address: faker.faker.address.streetAddress(),
    country: faker.faker.address.country(),
    photoUrl: faker.faker.image.url(),
  });
}

// generate users

export const users: Partial<User>[] = [];

for (let i = 0; i < 1000000; i++) {
  users.push({
    createdAt: undefined,
    deletedAt: undefined,
    editedAt: undefined,
    id: undefined,
    name: faker.faker.person.firstName(),
    password: faker.faker.string.alphanumeric(),
    passwordSalt: faker.faker.string.alphanumeric()
  });
}

