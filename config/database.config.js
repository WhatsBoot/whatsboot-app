// ===========================================
// CONFIGURAÇÃO DO BANCO DE DADOS - WHATSBOOT
// ===========================================
// 
// IMPORTANTE: Este arquivo deve ser configurado antes de fazer upload para o cPanel
// Preencha as informações do seu banco de dados MySQL/PostgreSQL
//
// Para cPanel:
// 1. Acesse o cPanel -> Bancos de Dados MySQL
// 2. Crie um banco de dados
// 3. Crie um usuário e associe ao banco
// 4. Anote as informações e preencha abaixo
// 5. Faça upload dos arquivos
//

module.exports = {
  // ===========================================
  // CONFIGURAÇÕES DO BANCO DE DADOS
  // ===========================================
  
  // Tipo do banco: 'mysql' ou 'postgresql' 
  DATABASE_TYPE: 'postgresql', // ou 'mysql'
  
  // Configurações do Servidor de Banco
  DATABASE_HOST: 'localhost',     // Ex: localhost ou o IP do servidor
  DATABASE_PORT: 5432,            // 5432 para PostgreSQL, 3306 para MySQL
  DATABASE_NAME: 'whatsboot_db',  // Nome do banco criado no cPanel
  DATABASE_USER: 'whatsboot_user', // Usuário do banco
  DATABASE_PASSWORD: 'sua_senha_aqui', // Senha do usuário
  
  // URL Completa do Banco (alternativa às configurações individuais)
  // Se preferir usar URL, comente as configurações acima e descomente a linha abaixo:
  // DATABASE_URL: 'postgresql://usuario:senha@host:porta/nome_banco',
  
  // ===========================================
  // CONFIGURAÇÕES DO ADMINISTRADOR PADRÃO
  // ===========================================
  
  // Conta de administrador que será criada automaticamente
  ADMIN_USERNAME: 'WhatsBoot',
  ADMIN_PASSWORD: '15353621',
  ADMIN_EMAIL: 'admin@whatsboot.com',
  
  // ===========================================
  // CONFIGURAÇÕES DE SEGURANÇA
  // ===========================================
  
  // Chave secreta para sessions (mude para uma chave única e segura)
  SESSION_SECRET: 'whatsboot_secret_key_2024_change_this',
  
  // Ambiente: 'development' ou 'production'
  NODE_ENV: 'production',
  
  // ===========================================
  // CONFIGURAÇÕES DE ARQUIVOS E UPLOADS
  // ===========================================
  
  // Diretório para upload de arquivos (relativo à raiz do projeto)
  UPLOAD_DIR: './uploads',
  
  // Tamanho máximo de arquivo em MB
  MAX_FILE_SIZE: 50,
  
  // Tipos de arquivo permitidos para upload
  ALLOWED_FILE_TYPES: [
    'pdf', 'doc', 'docx', 'txt', 'zip', 'rar',
    'jpg', 'jpeg', 'png', 'gif',
    'mp4', 'avi', 'mov', 'mkv'
  ],
  
  // ===========================================
  // CONFIGURAÇÕES DO SITE
  // ===========================================
  
  // URL base do site (usado para links e downloads)
  SITE_URL: 'https://seudominio.com',
  
  // Porta do servidor (normalmente gerenciada pelo cPanel)
  PORT: process.env.PORT || 3000,
  
  // ===========================================
  // CONFIGURAÇÕES DE EMAIL (OPCIONAL)
  // ===========================================
  
  // Para notificações de novos membros, etc.
  SMTP_HOST: 'smtp.gmail.com',
  SMTP_PORT: 587,
  SMTP_USER: 'seu_email@gmail.com',
  SMTP_PASS: 'sua_senha_app',
  
  // ===========================================
  // CONFIGURAÇÕES AVANÇADAS
  // ===========================================
  
  // Backup automático (em dias)
  BACKUP_INTERVAL: 7,
  
  // Log de atividades
  ENABLE_LOGGING: true,
  
  // Compressão de arquivos
  ENABLE_COMPRESSION: true,
  
  // Cache de arquivos estáticos (em horas)
  STATIC_CACHE_TIME: 24
};