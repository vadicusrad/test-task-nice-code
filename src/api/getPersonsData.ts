export function getPersonsData() {
  return fetch(
    'https://dummyjson.com/users?limit=12&skip=10&select=firstName,lastName,age,image,gender'
  )
    .then((res) => res.json())
    .then((data) => data.users);
}
