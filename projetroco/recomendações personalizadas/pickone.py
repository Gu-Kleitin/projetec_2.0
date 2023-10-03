import os

def exibir_arquivos():
    # Obtém a lista de arquivos no diretório atual
    arquivos = os.listdir()

    # Filtra a lista para incluir apenas arquivos
    arquivos = [arquivo for arquivo in arquivos if os.path.isfile(arquivo)]

    # Exibe os arquivos disponíveis para seleção
    print("Arquivos disponíveis:")
    for i, arquivo in enumerate(arquivos):
        print(f"{i+1}. {arquivo}")

    return arquivos

def escolher_arquivo(arquivos):
    # Obtém a escolha do usuário
    escolha = int(input("Selecione um número correspondente ao arquivo desejado: "))

    # Verifica se a escolha é válida
    if escolha < 1 or escolha > len(arquivos):
        print("Escolha inválida. Tente novamente.")
        return escolher_arquivo(arquivos)

    # Retorna o arquivo escolhido
    return arquivos[escolha-1]

# Exibe os arquivos disponíveis
arquivos = exibir_arquivos()

# Verifica se há pelo menos três arquivos
if len(arquivos) < 3:
    print("Você precisa ter pelo menos três arquivos no diretório atual.")
else:
    # Escolhe um arquivo
    arquivo_escolhido = escolher_arquivo(arquivos)
    print(f"Você escolheu o arquivo: {arquivo_escolhido}")
