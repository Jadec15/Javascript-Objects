class Wallet {
  constructor(name, color, length, contents, pocketNumber, zipperOpen) {
    this.name = name;
    this.color = color;
    this.length = length;
    this.contents = contents;
    this.pocketNumber = pocketNumber;
    this.zipperOpen = zipperOpen;
  }
  unzipWallet(zipperStatus) {
    this.zipperOpen = zipperStatus;
  }
}

export default Wallet;
