type User = {username: string, password: string};
type VerifyUserFn = (user: User, receivedValues: User) => boolean;


const verifyUser: VerifyUserFn = (user, receivedValues) => {
  return (
    user.username === receivedValues.username && user.password === receivedValues.password
  );
}

const bdUser = {username: 'teste', password: '123'};
const receivedUser = {username: 'teste', password: '4567'};
const loggedIn = verifyUser(bdUser, receivedUser);

console.log(loggedIn);
