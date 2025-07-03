#!/usr/bin/env node

// ===========================================
// SCRIPT DE INICIALIZAÇÃO - WHATSBOOT
// ===========================================
// 
// Este script deve ser executado APÓS fazer upload dos arquivos para o cPanel
// Execute: node setup.js
//

const fs = require('fs');
const path = require('path');

console.log('🚀 INICIANDO CONFIGURAÇÃO DO WHATSBOOT...\n');

// Carregar configurações
let config;
try {
  config = require('./config/database.config.js');
  console.log('✅ Arquivo de configuração carregado com sucesso');
} catch (error) {
  console.error('❌ Erro ao carregar config/database.config.js');
  console.error('   Certifique-se de que o arquivo existe e está configurado corretamente');
  process.exit(1);
}

// Verificar configurações obrigatórias
console.log('\n📋 VERIFICANDO CONFIGURAÇÕES...');

const requiredConfigs = [
  'DATABASE_HOST',
  'DATABASE_NAME', 
  'DATABASE_USER',
  'DATABASE_PASSWORD',
  'ADMIN_USERNAME',
  'ADMIN_PASSWORD'
];

let configValid = true;
for (const configKey of requiredConfigs) {
  if (!config[configKey] || config[configKey] === 'sua_senha_aqui') {
    console.error(`❌ Configuração obrigatória não definida: ${configKey}`);
    configValid = false;
  } else {
    console.log(`✅ ${configKey}: configurado`);
  }
}

if (!configValid) {
  console.error('\n❌ Configurações incompletas. Edite o arquivo config/database.config.js primeiro!');
  process.exit(1);
}

// Construir URL do banco de dados
let databaseUrl;
if (config.DATABASE_URL) {
  databaseUrl = config.DATABASE_URL;
} else {
  const protocol = config.DATABASE_TYPE === 'mysql' ? 'mysql' : 'postgresql';
  databaseUrl = `${protocol}://${config.DATABASE_USER}:${config.DATABASE_PASSWORD}@${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`;
}

// Definir variáveis de ambiente
process.env.DATABASE_URL = databaseUrl;
process.env.NODE_ENV = config.NODE_ENV || 'production';
process.env.SESSION_SECRET = config.SESSION_SECRET;

console.log('\n🔌 CONECTANDO AO BANCO DE DADOS...');

async function setupDatabase() {
  try {
    // Importar dependências do projeto
    const { drizzle } = require('drizzle-orm/neon-serverless');
    const { Pool } = require('@neondatabase/serverless');
    const bcrypt = require('bcrypt');
    
    // Conectar ao banco
    const pool = new Pool({ connectionString: databaseUrl });
    const db = drizzle({ client: pool });
    
    console.log('✅ Conectado ao banco de dados com sucesso');
    
    // Importar schema
    const schema = require('./shared/schema');
    
    console.log('\n📊 CRIANDO TABELAS...');
    
    // As tabelas já foram criadas pelo drizzle-kit push
    // Agora vamos criar o usuário administrador
    
    console.log('\n👤 CRIANDO USUÁRIO ADMINISTRADOR...');
    
    // Verificar se já existe
    const existingAdmin = await db
      .select()
      .from(schema.admins)
      .where(schema.admins.username.eq(config.ADMIN_USERNAME));
    
    if (existingAdmin.length > 0) {
      console.log('⚠️  Usuário administrador já existe, atualizando senha...');
      
      const hashedPassword = await bcrypt.hash(config.ADMIN_PASSWORD, 10);
      await db
        .update(schema.admins)
        .set({ 
          password: hashedPassword,
          email: config.ADMIN_EMAIL,
          updatedAt: new Date()
        })
        .where(schema.admins.username.eq(config.ADMIN_USERNAME));
        
      console.log('✅ Usuário administrador atualizado');
    } else {
      const hashedPassword = await bcrypt.hash(config.ADMIN_PASSWORD, 10);
      await db
        .insert(schema.admins)
        .values({
          username: config.ADMIN_USERNAME,
          password: hashedPassword,
          email: config.ADMIN_EMAIL,
          isActive: true
        });
        
      console.log('✅ Usuário administrador criado');
    }
    
    console.log('\n📁 CRIANDO DIRETÓRIOS...');
    
    // Criar diretório de uploads
    const uploadDir = config.UPLOAD_DIR || './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
      console.log(`✅ Diretório criado: ${uploadDir}`);
    } else {
      console.log(`✅ Diretório já existe: ${uploadDir}`);
    }
    
    // Criar subdiretórios
    const subDirs = ['videos', 'files', 'images'];
    for (const subDir of subDirs) {
      const fullPath = path.join(uploadDir, subDir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`✅ Subdiretório criado: ${fullPath}`);
      }
    }
    
    console.log('\n🎯 INSERINDO DADOS INICIAIS...');
    
    // Inserir planos de preços padrão
    const defaultPricing = [
      {
        planName: 'Básico',
        originalPrice: '197.00',
        currentPrice: '97.00',
        period: '/mês',
        features: JSON.stringify([
          'Até 1.000 contatos',
          'Campanhas básicas',
          'Suporte por email',
          '3 automações'
        ]),
        isHighlighted: false,
        isActive: true,
        order: 1
      },
      {
        planName: 'Profissional',
        originalPrice: '397.00',
        currentPrice: '197.00',
        period: '/mês',
        features: JSON.stringify([
          'Até 10.000 contatos',
          'Campanhas avançadas',
          'Suporte prioritário',
          'Automações ilimitadas',
          'Relatórios detalhados'
        ]),
        isHighlighted: true,
        isActive: true,
        order: 2
      },
      {
        planName: 'Empresarial',
        originalPrice: '797.00',
        currentPrice: '397.00',
        period: '/mês',
        features: JSON.stringify([
          'Contatos ilimitados',
          'Campanhas personalizadas',
          'Suporte 24/7',
          'API completa',
          'Integração customizada'
        ]),
        isHighlighted: false,
        isActive: true,
        order: 3
      }
    ];
    
    // Verificar se já existem preços
    const existingPricing = await db.select().from(schema.pricing);
    if (existingPricing.length === 0) {
      for (const plan of defaultPricing) {
        await db.insert(schema.pricing).values(plan);
      }
      console.log('✅ Planos de preços padrão inseridos');
    } else {
      console.log('✅ Planos de preços já existem');
    }
    
    console.log('\n🎉 CONFIGURAÇÃO CONCLUÍDA COM SUCESSO!');
    console.log('\n📋 INFORMAÇÕES DE ACESSO:');
    console.log(`   URL do Admin: ${config.SITE_URL}/admin`);
    console.log(`   Usuário: ${config.ADMIN_USERNAME}`);
    console.log(`   Senha: ${config.ADMIN_PASSWORD}`);
    console.log('\n🔧 PRÓXIMOS PASSOS:');
    console.log('   1. Acesse o painel administrativo');
    console.log('   2. Configure o conteúdo do site');
    console.log('   3. Adicione vídeo aulas');
    console.log('   4. Configure arquivos para download');
    console.log('   5. Teste todas as funcionalidades');
    
    await pool.end();
    
  } catch (error) {
    console.error('\n❌ ERRO DURANTE A CONFIGURAÇÃO:');
    console.error(error.message);
    console.error('\n🔍 POSSÍVEIS CAUSAS:');
    console.error('   - Credenciais do banco incorretas');
    console.error('   - Banco de dados não existe');
    console.error('   - Permissões insuficientes');
    console.error('   - Dependências não instaladas (execute: npm install)');
    process.exit(1);
  }
}

// Executar setup
setupDatabase().catch(console.error);