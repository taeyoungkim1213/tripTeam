create table package_info
(
    packageNo        int auto_increment
        primary key,
    packageType      varchar(50)                         not null,
    packageId        varchar(50)                         null,
    packageCategory  varchar(50)                         not null,
    packageLocation  varchar(50)                         not null,
    packageTheme     varchar(250)                        null,
    packageStartDate varchar(50)                         not null,
    packagePrice     varchar(50)                         not null,
    packageRegDate   timestamp default CURRENT_TIMESTAMP null,
    packageUpdate    datetime                            null
);

create table package_content
(
    packageContentNo int auto_increment
        primary key,
    packageType      varchar(50)  not null,
    packageId        varchar(50)  not null,
    packageImg       varchar(50)  null,
    packageTitle     varchar(250) not null,
    packageContent   varchar(250) not null
);

create table reservation_payment
(
    reservationNo          int auto_increment
        primary key,
    packageNo              int         null,
    userId                 varchar(50) null,
    reservationName        varchar(50) not null,
    reservationGender      varchar(50) not null,
    reservationBirth       varchar(50) not null,
    reservationNationality varchar(50) not null,
    reservationPhone       varchar(50) not null,
    reservationEmail       varchar(50) not null,
    packageStartDate       varchar(50) null,
    packagePrice           int         null,
    reservationTotalPrice  int         null,
    reservationPayMethod   varchar(50) null,
    reservationPayDate     datetime    not null
);


