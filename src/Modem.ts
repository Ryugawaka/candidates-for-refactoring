// название интерфейса, поменял название пропса в методе send
interface IModem {
  dial: (phoneNumber: string) => boolean;
  disconnect: () => boolean;
  send: (message: string) => boolean;
  recv: () => string;
  getConnectedPhoneNumber: () => string;
}
