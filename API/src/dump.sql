create table users (
	id  serial primary key,
	name text not null,
	email text not null,
	password text not null
);

create table recipes (
  id serial primary key,
  name text not null,
  ingredients text not null,
  prepare text not null,
  user_id int references users(id)
);

create table coments (
  id serial primary key,
  user_id int references users(id),
  recipe_id int references recipes(id),
  description text not null
);

create table likes (
  id serial primary key,
  user_id int references users(id),
  recipe_id int references recipes(id)
);