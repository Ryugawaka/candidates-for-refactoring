//добавил обработку ошибок
class ServerApi {
  public processAddAccountRequest(url: string, account: TAccount) {
    try {
    return  this.fetch('POST', url, account)
    }
    catch(error) {
      return error
    }
  }

  public sendDeleteAccountRequest(url: string, accountId: string) {
    try {
      return this.fetch('DELETE', url, accountId);
    }
    catch(error){
      return error
    }
  }

  public requestAuth(url: string, credentials: TCredentials) {
    try {
      return this.fetch('GET', url, credentials);
    }
    catch(error){
      return error
    }
  }
