DROP TABLE IF EXISTS PageTags;
DROP TABLE IF EXISTS PageContent;
DROP TABLE IF EXISTS Pages;
DROP TABLE IF EXISTS Locations;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id         SERIAL,
  slack_id   VARCHAR(32) NOT NULL UNIQUE,
  username   VARCHAR(64) NOT NULL UNIQUE,
  first_name VARCHAR(32) NOT NULL,
  last_name  VARCHAR(32) NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  otp        INT NULL,
  PRIMARY KEY PK_Users (id)
);

CREATE TABLE Locations (
  id       SERIAL,
  location VARCHAR(32) NULL,
  PRIMARY KEY PK_Locations (id)
);

CREATE TABLE Pages (
  id          SERIAL,
  type        VARCHAR(8) NOT NULL,
  path        VARCHAR(128) NOT NULL UNIQUE,
  author_id   BIGINT UNSIGNED NOT NULL,
  location_id BIGINT UNSIGNED NOT NULL,
  image       VARCHAR(16) NULL,
  title       VARCHAR(128) NULL,
  slug        VARCHAR(256) NULL,
  created_on  TIMESTAMP NULL,
  PRIMARY KEY PK_Pages (id),
  FOREIGN KEY FK_Pages_Author (author_id) REFERENCES Users(id),
  FOREIGN KEY FK_Pages_Location (location_id) REFERENCES Locations(id)
);

CREATE TABLE PageContent (
  id      SERIAL,
  page_id BIGINT UNSIGNED NOT NULL,
  status  INT NOT NULL,
  content TEXT NOT NULL,
  PRIMARY KEY PK_PageContent (id),
  FOREIGN KEY FK_PageContent_Page (page_id) REFERENCES Pages(id)
);

CREATE TABLE PageTags (
  id       SERIAL,
  page_id  BIGINT UNSIGNED NOT NULL,
  tag_name VARCHAR(128) NOT NULL,
  PRIMARY KEY PK_PageTags (id),
  FOREIGN KEY FK_PageTags_Page (page_id) REFERENCES Pages(id)
);
