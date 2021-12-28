
export class AuthUtils {
  private static authTokenKey = 'auth_token';

  static getAuthToken() {
    return localStorage.getItem(AuthUtils.authTokenKey);
  }

  static setAuthToken(value: any) {
    return localStorage.setItem(AuthUtils.authTokenKey, value);
  }

  static removeAuthToken() {
    return localStorage.removeItem(AuthUtils.authTokenKey);
  }
}
