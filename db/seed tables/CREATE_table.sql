create table houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent DECIMAL
);

insert into houses (
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
    ) values (
        'Don Cheadle',
        '111 Biggie Way',
        'San Diego',
        'CA',
        42069,
        'https://www.latimes.com/resizer/aH9FgOEktU6ztakaNqTEszRfwQ0=/fit-in/800x600/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ZMOQ7ZCZTZEHDAJTYTN7ZZDIYE.jpg',
        4200000,
        111
    );
    
    select * from houses;