import os

lista_de_compras = []

def main():
    print("Bem vindo ao programa de lista de compras!")
    print("1 - Adicionar item")
    print("2 - Remover item")
    print("3 - Listar itens")
    print("4 - Sair")
    opcao = input("Digite a opção desejada: ")
    # se a opção não for vazia
    try:
        opcao = int(opcao)
        if  int(opcao) in range(1,5):
            opcao = int(opcao)
            menu(opcao)
        else:
            print("Opção inválida!")
            main2()
    except:
        print("Opção inválida!")
        main2()

def main2():
    print("Digite uma das opções abaixo:")
    print("1 - Adicionar item")
    print("2 - Remover item")
    print("3 - Listar itens")
    print("4 - Sair")
    opcao = input("Digite a opção desejada: ")
    # se a opção não for vazia
    
    try:
        opcao = int(opcao)
        if  int(opcao) in range(1,5):
            opcao = int(opcao)
            menu(opcao)
        else:
            print("Opção inválida!")
            main2()
    except:
        print("Opção inválida!")
        main2()
    
def menu(opcao):
    if opcao == 1:
        adicionar_item()
    elif opcao == 2:
        menu_remover()
    elif opcao == 3:
        listar_itens()
    elif opcao == 4:
        print("Obrigado por usar o programa!") 
    else:
        print("Opção inválida!")
        ()

def menu_remover():
    print('Selecione uma das opções abaixo:')
    print('1 - Remover item pelo nome')
    print('2 - Remover item pela posição')
    print('3 - Remover todos os itens')
    print('4 - Voltar ao menu principal')
    opcao = input('Digite a opção desejada: ')
    try:
        opcao = int(opcao)
        if  int(opcao) in range(1,5):
            opcao = int(opcao)
            remover_item(opcao)
        else:
            print("Opção inválida!")
            menu_remover()
    except:
        print("Opção inválida!")
        menu_remover()

def adicionar_item():
    os.system("cls")
    item = input("Digite o item a ser adicionado: ")
    item.capitalize # deixa a primeira letra maiúscula
    
    if item in lista_de_compras:
        print(f'Item {item} já existe na lista!')
        adicionar_item()
    elif item == "":
        print("Item não pode ser vazio!")
        adicionar_item()
    else:
        lista_de_compras.append(item)
        print(f'Item {item} adicionado com sucesso!')
        main2()

def remover_item(opcao):
    os.system("cls")
    if opcao == 1:
        item = input("Digite o nome do item a ser removido: ")
        item.capitalize
        if item in lista_de_compras:
            lista_de_compras.remove(item)
            print(f'Item {item} removido com sucesso!')
            main2()
        else:
            print(f'Item {item} não existe na lista!')
            main2()
    elif opcao == 2:
        item = input("Digite a posição do item a ser removido: ")
        try:
            item = int(item)
            if item in range(0, len(lista_de_compras)):
                lista_de_compras.pop(item)
                print(f'Item {item} removido com sucesso!')
                main2()
            else:
                print(f'Posição {item} não existe na lista!')
                main2()
        except:
            print("Posição inválida!")
            main2()
    elif opcao == 3:
        lista_de_compras.clear()
        print("Todos os itens foram removidos com sucesso!")
        main2()
    elif opcao == 4:
        main2()   

def listar_itens():
    os.system("cls")
    if len(lista_de_compras) == 0:
        print("Lista de compras vazia!")
        main2()
    else:
        print("Lista de compras:")
        for item in lista_de_compras:
            print(item)
        main2()

main()
