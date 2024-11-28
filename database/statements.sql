

-- Holidays 

CREATE TABLE holidays (
holiday_id INTEGER PRIMARY KEY AUTOINCREMENT, 
holiday_date TEXT NOT NULL,  
holiday_name TEXT NOT NULL,
formatted_date TEXT NOT NULL
);

INSERT INTO holidays(holiday_name, holiday_date, formatted_date) 
VALUES ("Dia del trabajo", "September 2", "09-02"),
       ("Dia de la Raza", "October 14", "10-14"),
       ("Dia del Veterano", "November 11", "11-11"),
       ("Dia de la Cultura Puertorriqueña y Descubrimiento de Puerto Rico", "November 19", "11-19"),
       ("Dia de Accion de Gracias", "November 28", "11-28"),
       ("Dia de Navidad", "December 25", "12-25")

INSERT INTO holidays(holiday_name, holiday_date, formatted_date)
VALUES ("Dia de los Reyes Magos", "January 6", "01-06"),
       ("Nuevo Año", "January 1", "01-01");

SELECT * FROM holidays ORDER BY formatted_date

ALTER TABLE holidays ADD COLUMN formatted_date TEXT;





-- Guidelines




-- Calendar