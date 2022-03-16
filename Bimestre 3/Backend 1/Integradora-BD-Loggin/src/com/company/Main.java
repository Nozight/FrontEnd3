package com.company;

import org.apache.log4j.BasicConfigurator;
import  org.apache.log4j.Logger;
import java.sql.*;

public class Main {

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException {
        BasicConfigurator.configure();

        Class.forName("org.h2.Driver").newInstance();
        //jdbc:h2:~/test
        Connection con = DriverManager.getConnection("jdbc:h2:"+
                "~/test", "sa", "");

        Statement stmt = con.createStatement();
        try {
            //Código para crear una tabla. Elimina la tabla si esta ya existe y la
            //vuelve a crear
            String createSql = "DROP TABLE IF EXISTS EMPLEADOS;\n" +
                    "CREATE TABLE EMPLEADOS(ID INT PRIMARY KEY, NAME VARCHAR(255), SURNAME VARCHAR(255), DNI INT, ADDRESS VARCHAR (255));\n" +
                    "INSERT INTO EMPLEADOS VALUES(1, 'Pedro', 'Feijo', 1234567, 'asd 123');\n" +
                    "INSERT INTO EMPLEADOS VALUES(2, 'Tomas', 'Romero', 654685, 'wer 123');\n" +
                    "INSERT INTO EMPLEADOS VALUES(3, 'Marliyn', 'Cabrera', 894456, 'asd 123');\n" +
                    "INSERT INTO EMPLEADOS VALUES(4, 'Pedro', 'Feijo', 1234567, 'asd 123');\n" +
                    "INSERT INTO EMPLEADOS VALUES(1, 'Pedro', 'Feijo', 1234567, 'asd 123');\n";
            stmt.execute(createSql);

        } catch (Exception e){
            logger.info("Error en la secuencia SQL \n" +  e.getMessage());
        }
//Codigo para consultar todos los registros de la tabla TEST
        String sql = "select * from EMPLEADOS";
        ResultSet rd = stmt.executeQuery(sql);



        //Código para recorrer el resultado de la consulta
        while(rd.next()) {
            System.out.println(rd.getInt(1) + rd.getString(2) + rd.getString(3) +rd.getString(4) +rd.getString(5));

    }
}
}
