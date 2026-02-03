export class AuthService {
  login(username?: string, _password?: string) {
    const name = username || 'user';
    return {
      success: true,
      token: `mock-token-${name}-${Date.now()}`,
      user: { username: name },
    };
  }
}
