FROM node:18

WORKDIR /app

# Copy only package.json (exclude package-lock.json)
COPY package.json ./

# Generate package-lock.json and install dependencies inside Docker
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

EXPOSE 3000

CMD ["npx", "vite", "--host"]

