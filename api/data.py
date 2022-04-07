import os

from api import repository

def read_all_files():
    path = os.path.dirname(os.path.abspath(__file__))

    # path = os.getcwd()
    os.chdir( f"{path}\\alimentos")
    for file in os.listdir():
        if file.endswith(".txt"): 
            file_path = f"{path}\\alimentos\{file}"
            lines = read_text_file(file_path)
            repository.save_data(lines)      

def read_text_file(file_path):   
    lines = []
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()[2:] 
    return lines   
    
