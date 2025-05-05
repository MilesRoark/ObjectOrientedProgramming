/* Object Literal
const userOne = {
  email: "ryu@ninjas.com",
  name: "Ryu",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};

console.log(userOne.login());
console.log(userOne.logout());

userOne.name = "Kronos";
userOne.age = "404";

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(`${this.name} is logged in.`);
    return this;
  }
  logout() {
    console.log(`${this.email} just logged out`);
    return this;
  }
  updateScore() {
    this.score++;
    console.log(`${this.email} score is now ${this.score}`);
    return this;
  }
} 
*/

/* CLASSES AND CLASS INHERITANCE

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email !== user.email;
    });
  }
}

const userOne = new User("Kronos@kronosmail.com", "Kronos");
const userTwo = new User("Aphrodite@aphroditemail.com", "Aphrodite");
let admin = new Admin("crazyAdmin@admins", "crazyAdmin");

userOne.login().updateScore().updateScore().logout();

let users = [userOne, userTwo, admin];
admin.deleteUser(userOne);

console.log(users);
*/

// FACTORY FUNCTIONS AND PROTOTYPES

function User(email, name) {
  (this.email = email), (this.name = name), (this.online = false);
}

User.prototype.login = function () {
  this.online = true;
  console.log(`${this.name} has logged in.`);
};
User.prototype.logout = function () {
  this.online = false;
  console.log(`${this.name} has logged out.`);
};

function Admin(...args) {
  User.apply(this, args);
  this.role = "super admin";
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email !== u.email;
  });
};

const userOne = new User("kronos@kronosmail.com", "kronos");
const userTwo = new User("aphrodite@aphroditemail.com", "aphrodite");
const admin = new Admin("crazyadmin@admins.com", "crazyadmin");
let users = [userOne, userTwo, admin];

console.log(admin);
