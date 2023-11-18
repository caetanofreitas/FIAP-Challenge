# Projeto Fiap
## Descrição do projeto
Projeto constitui em backend Node Js (Nest Js), web React Js (Vite) e app utilizando React Native (Expo), para facilitar a execução do app recomenda-se utilizar um emulador ou o app Expo-Go.

## Para execução do projeto
- Caso opte pela utilização de 
- Utilizando npm execute os seguintes comandos:
```cmd
# Inicializando backend
$ cd api && npm i && npm start

# Inicializando frontend
$ cd web && npm i && npm start

# Inicializando app
$ cd app && npm i && npm start
```

## Observações finais
Caso opte pela utilização do Expo-Go ao invés de um emulador na máquina, crie um arquivo .env.local dentro da pasta app com a seguinte variável:
```.env
EXPO_PUBLIC_API_URL=http:/<SEU ENDEREÇO IPV4>:8000/api
```