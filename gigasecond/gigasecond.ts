class Gigasecond {
    birthday: Date;

    constructor(birthday: Date) {
        this.birthday = birthday;
    }

    private addGigasecondToBirthday(birthday) {
        const gigaSecond: number = 1000000000;
        return new Date(birthday.getTime() + gigaSecond * 1000);
    }

    public date() {
        return this.addGigasecondToBirthday(this.birthday);
    }
}

export default Gigasecond;
