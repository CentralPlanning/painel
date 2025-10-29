import sys
import platform
import datetime
import requests

def main():
    print("=" * 50)
    print("✅ Teste de Ambiente Python")
    print("=" * 50)
    
    # Versão do Python
    print(f"Versão do Python: {platform.python_version()}")
    print(f"Local de execução: {sys.executable}")
    print(f"Sistema operacional: {platform.system()} {platform.release()}")
    print("-" * 50)
    
    # Teste de biblioteca padrão
    hoje = datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    print(f"Data/hora atual: {hoje}")
    
    # Teste de biblioteca externa
    try:
        response = requests.get("https://api.github.com")
        if response.status_code == 200:
            print("🌐 Teste de internet: OK — conseguiu acessar o GitHub API")
        else:
            print("⚠️ Internet acessível, mas resposta inesperada do servidor.")
    except Exception as e:
        print("❌ Falha ao acessar a internet:", e)
    
    print("-" * 50)
    print("Tudo pronto para rodar scripts Python 🚀")
    print("=" * 50)

if __name__ == "__main__":
    main()
