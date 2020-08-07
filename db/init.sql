CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  price INTEGER,
  img TEXT
);


-- DUMMY DATA
INSERT INTO products
(name, price, img)
VALUES
('Blue Sneaks','50','https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
('Magma-Zones','120','https://static.dezeen.com/uploads/2020/02/nike-space-hippie-shoe-design_dezeen_2364_col_2-852x585.jpg'),
('Technichroma','299','https://thumblr.uniid.it/product/187960/961474ca4023.jpg')