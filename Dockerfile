# Stage 1: Build the React frontend
FROM node:16 as builder

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ ./

RUN npm run build

# Stage 2: Build the Django backend
FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Django project
COPY ./haven /app/

# Copy the built frontend from the builder stage
COPY --from=builder /app/frontend/build /app/frontend/build

# Expose the port the app runs on
EXPOSE 8000

# Run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "haven.wsgi"]