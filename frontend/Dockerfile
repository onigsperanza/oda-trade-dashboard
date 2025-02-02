FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose Vite's development server port
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev", "--", "--host"]
