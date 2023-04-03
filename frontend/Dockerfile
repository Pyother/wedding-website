FROM node:18.13.0

WORKDIR /frontend

COPY package.json ./
COPY package-lock.json ./
COPY src ./src
COPY public ./public

RUN npm install -f react
RUN npm install -f react-scripts
RUN npm run build

CMD ["npm", "run", "test"]

