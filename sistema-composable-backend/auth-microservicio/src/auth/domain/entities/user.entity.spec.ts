/** ... */

import { User } from './user.entity';

describe('User Entity', () => {
  it('should create a user instance', () => {
    const user = new User('1', 'test@test.com', 'Mileida');
    expect(user.email).toBe('test@test.com');
    expect(user.id).toBe('1');
  });
});