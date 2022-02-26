
function User(name, email, age, showEmail) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.updateName = function (newName) {
        if (this.age > 18) {
            this.name = newName;
        } else {
            console.log(`You Cant Update Name Because Of Age Restriction`);
        }
    };
    this.showEmail = function () {
        if (showEmail === true) {
            return `Email Is: ${this.email}`;
        } else {
            return `Data Is Private`;
        }
    };
}

let user1 = new User("Osama", "fady@fady.com", 21, false);
console.log(user1.name);
user1.updateName("Ahmed");
console.log(user1.name);
console.log(user1.showEmail());