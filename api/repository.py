

import sqlite3
import os

def save_data(lines):

    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    database = os.path.join(THIS_FOLDER, "alimentos.db")
    try:
        conn = sqlite3.connect(database)
        c = conn.cursor()

        create_query = 'CREATE TABLE if not exists Alimentos (nome PRIMARY KEY, quantidade INTEGER, proteinas INTEGER, carboidratos INTEGER, gorduras INTEGER)' 
        c.execute(create_query)

        for line in lines:
            line = line.replace("\t", "    ")
            data = line[37:].split()
            create_query = "INSERT OR REPLACE INTO Alimentos VALUES ('{}', '{}', '{}', '{}', '{}');".format(
                line[0:37], int(data[0]), int(data[1]), int(data[2]), int(data[3])
            )
                        
            c.execute(create_query)
        conn.commit()
    except Exception as ex:
        pass
    finally:
        c.close()


def get_macro(macro):

    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    database = os.path.join(THIS_FOLDER, "alimentos.db")

    try:
        conn = sqlite3.connect(database)
        c = conn.cursor()
        
        res = [(str(x[0]), str(x[1]), str(x[2]), str(x[3]), str(x[4]))
                                        for x in c.execute("""SELECT nome, quantidade, proteinas, carboidratos, gorduras
                                            FROM Alimentos
                                            ORDER BY {} DESC LIMIT 2""".format(macro) )]

        return res

    except Exception as ex:
        print("error:" + str(ex))
    finally:
        c.close()