export * from './users.service';
export * from './hobbies.services';

import { UserService } from './users.service';
import { HobbieService } from './hobbies.services';

export const Services = [UserService, HobbieService];
