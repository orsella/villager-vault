import { db } from "./server";
// db.query(``);

// create table personality(
//     id serial primary key,
//     type varchar(255),
//     facts text
//   );

//   create table villagers(
//     id serial primary key,
//     name varchar(255),
//     species varchar(255),
//     personality_id integer references personality(id),
//     coffee varchar(255)
//   );

//   insert into personality (type, facts)
//   values
//     ('Normal', 'Obsessive with cleaning, caring and friendly nature'),
//     ('Lazy', 'Relaxed and easy going, love to eat and sleep'),
//     ('Snooty', 'Well spoken and sarcastic, give lessons in fashion'),
//     ('Smug', 'Polite with a big ego, give great life advice'),
//     ('Peppy', 'Chipper and enjoy cheering, numerous claims to stardom'),
//     ('Jock', 'Enjoy bragging and working out, invested in sports'),
//     ('Sisterly', 'Caring but sometimes blunt, give fighting tips'),
//     ('Cranky', 'Bitter and out of touch, enjoy gossiping');

//   insert into villagers (name, species, personality_id, coffee)
//   values(
//     'Bluebear',
//     'Cub',
//     5,
//     'Mocha'
//   ), (
//     'Dizzy',
//     'Elephant',
//     2,
//     'Blue Mountain'
//   ), (
//     'Lolly',
//     'Cat',
//     1,
//     'Mocha'
//   ), (
//     'Pietro',
//     'Sheep',
//     4,
//     'Blue Mountain'
//   )
