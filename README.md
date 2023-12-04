# TodoList_Express_nodeJs

Descrpition: 

-------It's basic todolist app using nodejs (express),MySql,Boostrap v5,bcrypt,MVC models.

Firstly: 

In your sql management import this query to create new database(db) and table data  step by step

  --firstly : create new db
         
 CREATE TABLE jwt
        --secondly: create table user

CREATE TABLE Users (
    id int NOT NULL PRIMARY KEY,

   userName varchar(255) NOT NULL,

 email varchar(255),

 passs varchar(255),

sex  varchar(255),

address varchar(255),

fullName varchar(255),

phoneNumber  varchar(255),

   
);

INSERT INTO users (id, userName, email, pass, sex, address, fullname, phoneNumber)

VALUES

  (1, 'JohnDoe', 'johndoe@example.com', 'password1', 'Male', '123 Main St', 'John Doe', '1234567890'),

  (2, 'JaneSmith', 'janesmith@example.com', 'password2', 'Female', '456 Elm St', 'Jane Smith', '9876543210'),

  (3, 'MikeJohnson', 'mikejohnson@example.com', 'password3', 'Male', '789 Oak St', 'Mike Johnson', '5432167890'),

  (4, 'EmilyDavis', 'emilydavis@example.com', 'password4', 'Female', '321 Maple Ave', 'Emily Davis', '9087654321'),

  (5, 'RobertWilson', 'robertwilson@example.com', 'password5', 'Male', '789 Pine St', 'Robert Wilson', '4321098765'),

  (6, 'AnnaLee', 'annalee@example.com', 'password6', 'Female', '654 Oak Ln', 'Anna Lee', '6789054321'),

  (7, 'DavidMiller', 'davidmiller@example.com', 'password7', 'Male', '987 Maple Ave', 'David Miller', '3456789012'),

  (8, 'AmyTaylor', 'amytaylor@example.com', 'password8', 'Female', '543 Elm St', 'Amy Taylor', '9012345678'),

  (9, 'WilliamBrown', 'williambrown@example.com', 'password9', 'Male', '210 Oak Ln', 'William Brown', '5678901234'),

  (10, 'SophieHarris', 'sophieharris@example.com', 'password10', 'Female', '876 Pine St', 'Sophie Harris', '2345678901');


finally : open terminal in this project  and run the command

# npm run dev

open (http://localhost:8080) to go home page

![image](https://github.com/TamHM1410/TodoList_Express_nodeJs/assets/122521276/aad1ab34-9f6d-454b-acd8-47d0e31e4938)

click create data_user to create new User:

![image](https://github.com/TamHM1410/TodoList_Express_nodeJs/assets/122521276/19f55e9e-243c-4ea0-a8c1-f13d066aad9a)

click edit button to edit user information:

![image](https://github.com/TamHM1410/TodoList_Express_nodeJs/assets/122521276/c5a43600-8dd0-4b33-b484-31f2c764a9d8)

click delete button to delete user by id:

![image](https://github.com/TamHM1410/TodoList_Express_nodeJs/assets/122521276/81cfc554-79f9-4486-9c68-be3bc8c51aff)














 
