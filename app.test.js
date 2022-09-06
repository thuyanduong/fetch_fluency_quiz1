const app = require('./app');

test('getPost', () => {
  const json = {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    };
  expect(app.getPost(2)).resolves.toEqual(json);
});


test('getUsers', () => {
  const users = [
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Patricia Lebsack",
    "Chelsey Dietrich",
    "Mrs. Dennis Schulist",
    "Kurtis Weissnat",
    "Nicholas Runolfsdottir V",
    "Glenna Reichert",
    "Clementina DuBuque"
  ];
  expect(app.getUsers()).resolves.toEqual(users);
});

test('getAddresses', () => {
  const addresses = [
    "Kulas Light, Apt. 556, Gwenborough",
    "Victor Plains, Suite 879, Wisokyburgh",
    "Douglas Extension, Suite 847, McKenziehaven",
    "Hoeger Mall, Apt. 692, South Elvis",
    "Skiles Walks, Suite 351, Roscoeview",
    "Norberto Crossing, Apt. 950, South Christy",
    "Rex Trail, Suite 280, Howemouth",
    "Ellsworth Summit, Suite 729, Aliyaview",
    "Dayna Park, Suite 449, Bartholomebury",
    "Kattie Turnpike, Suite 198, Lebsackbury"
  ]
  expect(app.getAddresses()).resolves.toEqual(addresses);
});

test('shortestPost', () => {
  const shortest = {
    "userId": 8,
    "id": 76,
    "title": "doloremque officiis ad et non perferendis",
    "body": "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
  };

  expect(app.shortestPost()).resolves.toEqual(shortest);
});

test('numCompleted', () => {
  expect(app.numCompleted()).resolves.toBe(90);
});

test('searchPosts', () => {
  expect(app.searchPosts('consequuntur')).resolves.toHaveLength(7);
  expect(app.searchPosts('quia')).resolves.toHaveLength(22);
})