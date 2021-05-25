class Wallet {
  constructor(
    name,
    color,
    length,
    contents,
    pocketNumber,
    zipperOpen,
    dateAquired
  ) {
    this.name = name;
    this.color = color;
    this.length = length;
    this.contents = contents;
    this.pocketNumber = pocketNumber;
    this.zipperOpen = zipperOpen;
    this.dateAquired = dateAquired;
  }
  unzipWallet(zipperStatus) {
    this.zipperOpen = zipperStatus;
  }
  walletAge() {
    let rightNow = new Date();
    let aquired = new Date(this.dateAquired);
    let age = rightNow - aquired;
    let ageInDays = Math.floor(age / (1000 * 3600 * 24));
    return ageInDays;
  }
}

export default Wallet;
