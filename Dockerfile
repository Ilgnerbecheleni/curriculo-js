# Estágio de build
FROM node:18-alpine as build-stage

WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Construa o aplicativo para produção
RUN npm run build

# Estágio de produção
FROM nginx:alpine as production-stage

# Copie os arquivos estáticos da fase de build
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Configuração padrão do nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
