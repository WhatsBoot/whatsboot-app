// Arquivo de configuração principal que detecta automaticamente o ambiente
const fs = require('fs');
const path = require('path');

// Tentar carregar configuração personalizada
let customConfig = {};
const customConfigPath = path.join(__dirname, 'database.config.js');

if (fs.existsSync(customConfigPath)) {
  try {
    customConfig = require('./database.config.js');
    console.log('📋 Configuração personalizada carregada');
  } catch (error) {
    console.warn('⚠️  Erro ao carregar configuração personalizada:', error.message);
  }
}

// Configuração padrão
const defaultConfig = {
  DATABASE_TYPE: 'postgresql',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_NAME: process.env.DATABASE_NAME || 'whatsboot_db',
  DATABASE_USER: process.env.DATABASE_USER || 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
  
  ADMIN_USERNAME: 'WhatsBoot',
  ADMIN_PASSWORD: '15353621',
  ADMIN_EMAIL: 'admin@whatsboot.com',
  
  SESSION_SECRET: process.env.SESSION_SECRET || 'whatsboot_secret_change_in_production',
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  UPLOAD_DIR: './uploads',
  MAX_FILE_SIZE: 50,
  ALLOWED_FILE_TYPES: ['pdf', 'doc', 'docx', 'txt', 'zip', 'rar', 'jpg', 'jpeg', 'png', 'gif', 'mp4', 'avi', 'mov', 'mkv'],
  
  SITE_URL: process.env.SITE_URL || 'http://localhost:5000',
  PORT: process.env.PORT || 5000,
  
  ENABLE_LOGGING: true,
  ENABLE_COMPRESSION: true,
  STATIC_CACHE_TIME: 24
};

// Mesclar configurações (customConfig sobrescreve defaultConfig)
const config = { ...defaultConfig, ...customConfig };

// Construir URL do banco se não fornecida
if (!config.DATABASE_URL) {
  const protocol = config.DATABASE_TYPE === 'mysql' ? 'mysql' : 'postgresql';
  config.DATABASE_URL = `${protocol}://${config.DATABASE_USER}:${config.DATABASE_PASSWORD}@${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`;
}

// Definir variáveis de ambiente se não existirem
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = config.DATABASE_URL;
}
if (!process.env.SESSION_SECRET) {
  process.env.SESSION_SECRET = config.SESSION_SECRET;
}
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = config.NODE_ENV;
}

module.exports = config;