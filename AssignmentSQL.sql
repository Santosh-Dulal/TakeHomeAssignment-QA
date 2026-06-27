-- create database assignmentqa
-- use assignmentqa


/* CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department VARCHAR(100) NOT NULL
) */

/*CREATE TABLE trainings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    training_name VARCHAR(100) NOT NULL
) */

/*CREATE TABLE employee_trainings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    training_id INT NOT NULL,
    status ENUM('Assigned','Completed','Pending Approval','Approved','Rejected') DEFAULT 'Assigned',

    due_date DATE,
    completion_date DATE,

    FOREIGN KEY (employee_id) REFERENCES employees(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (training_id) REFERENCES trainings(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
)*/

/*CREATE TABLE certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    certification_name VARCHAR(100) NOT NULL,
    expiry_date DATE NOT NULL,

    FOREIGN KEY (employee_id) REFERENCES employees(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) */

-- Insert fake data into the employee table
/*INSERT INTO employees (employee_id, name, email, department)
VALUES
('EMP001','John Smith','john.smith@test.com','IT'),
('EMP002','Alice Brown','alice.brown@test.com','HR'),
('EMP003','David Wilson','david.wilson@test.com','Operations'),
('EMP004','Sarah Taylor','sarah.taylor@test.com','Finance'),
('EMP005','Michael Johnson','michael.johnson@test.com','Quality');


-- Insert sample data in  Trainings table

INSERT INTO trainings (training_name)
VALUES
('Workplace Safety'),
('First Aid'),
('Cyber Security Awareness'),
('Fire Safety'),
('Quality Management');


-- Insert fake data into employee_trainings

INSERT INTO employee_trainings
(employee_id, training_id, status, due_date, completion_date)
VALUES
(1,1,'Completed','2026-06-10','2026-06-08'),
(1,2,'Assigned','2026-07-15',NULL),
(2,1,'Completed','2026-06-12','2026-06-11'),
(2,3,'Approved','2026-06-20','2026-06-18'),
(3,4,'Assigned','2026-06-18',NULL),
(3,5,'Completed','2026-06-15','2026-06-14'),
(4,2,'Pending Approval','2026-06-20','2026-06-19'),
(5,1,'Rejected','2026-06-17','2026-06-16');


-- Insert data into the certifications table

INSERT INTO certifications
(employee_id, certification_name, expiry_date)
VALUES
(1,'Forklift Operator','2026-07-10'),
(1,'First Aid','2027-03-20'),
(2,'Safety Compliance','2026-07-05'),
(3,'Hazard Management','2026-08-15'),
(4,'Fire Safety','2026-06-30'),
(5,'ISO 9001 Internal Auditor','2026-09-01');

*/

-- 1.  Return all employees and their departments 
-- select name, department from employees

-- 2. Return employees who have completed all assigned trainings 
-- this query uses inner join to retrieve information from employee tableand employee_trainings table e and et as alias
SELECT DISTINCT e.employee_id,e.name
FROM employees e
INNER JOIN employee_trainings et
ON e.id = et.employee_id
WHERE et.status = 'Completed';


-- Count trainings per employee
-- this query is contructed using inner join between employee and employee_training table it uses aggregate count function to count all the training per employee, it users gruop by clause and total_training is alias
SELECT e.employee_id,e.name,COUNT(et.training_id) AS total_trainings
FROM employees e
INNER JOIN employee_trainings et
ON e.id = et.employee_id
GROUP BY
e.employee_id, e.name;

-- 4. Certifications expiring within 30 days 
-- it selects all the certficates that is about to expire in 30 days, between is operator in sql, current_date, add_date are sql functions
SELECT *
FROM certifications
WHERE expiry_date BETWEEN CURRENT_DATE 
AND DATE_ADD(CURRENT_DATE, INTERVAL 30 DAY)


--  5. Employees with overdue trainings  
-- this query is constructed using inner join between employee and employee_training table 'here' and 'and' clause used and status like completed and approved are ignore.

SELECT e.*,et.due_date,et.status
FROM employees e
INNER JOIN employee_trainings et
ON e.id = et.employee_id
WHERE et.due_date < CURRENT_DATE
AND et.status NOT IN ('Completed','Approved')


-- 6. Top 5 employees by completed trainings
-- this query is constructed using two tables employees nd employee_tranings group by and order by clause are used and count is count the total numbers of employee who has completed courses

SELECT 
e.name,
COUNT(et.training_id) AS completed_trainings
FROM employees e
INNER JOIN employee_trainings et
ON e.id = et.employee_id
WHERE et.status = 'Completed'
GROUP BY e.id, e.name
ORDER BY completed_trainings DESC