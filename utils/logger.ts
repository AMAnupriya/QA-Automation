export class Logger {
  static time() {
    return new Date().toISOString();
  }
  static info(msg: string) {
    console.log(`[INFO] ${Logger.time()} - ${msg}`);
  }
  static error(msg: string) {
    console.error(`[ERROR] ${Logger.time()} - ${msg}`);
  }
}
