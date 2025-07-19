# 🚀 GUIA DE INSTALAÇÃO - WHATSBOOT NO CPANEL

## 📋 PRÉ-REQUISITOS

Antes de instalar, certifique-se de que sua hospedagem possui:
- ✅ Node.js habilitado (versão 16+ recomendada)
- ✅ Banco de dados MySQL ou PostgreSQL
- ✅ Acesso ao cPanel
- ✅ Terminal SSH (opcional, mas recomendado)

---

## 🛠️ PASSO A PASSO COMPLETO

### 1️⃣ PREPARAÇÃO DOS ARQUIVOS

1. **Baixe todos os arquivos do projeto**
2. **Edite o arquivo `config/database.config.js`**:
   ```javascript
   // Exemplo de configuração para MySQL no cPanel:
   DATABASE_TYPE: 'mysql',
   DATABASE_HOST: 'localhost',
   DATABASE_PORT: 3306,
   DATABASE_NAME: 'seu_cpanel_whatsboot',  // Nome do banco criado
   DATABASE_USER: 'seu_cpanel_user',       // Usuário do banco
   DATABASE_PASSWORD: 'sua_senha_segura',  // Senha do banco
   
   // Configurações do administrador:
   ADMIN_USERNAME: 'WhatsBoot',
   ADMIN_PASSWORD: '15353621',
   ADMIN_EMAIL: 'seu@email.com',
   
   // URL do seu site:
   SITE_URL: 'https://seudominio.com',
   ```

### 2️⃣ CONFIGURAÇÃO DO BANCO NO CPANEL

1. **Acesse cPanel → Bancos de Dados MySQL**
2. **Crie um novo banco de dados**:
   - Nome: `seu_cpanel_whatsboot` (ou outro nome de sua escolha)
3. **Crie um usuário**:
   - Nome: `seu_cpanel_user`
   - Senha: `sua_senha_segura` (anote esta senha!)
4. **Associe o usuário ao banco**:
   - Selecione "Todos os privilégios"
5. **Anote as informações**:
   - Host: geralmente `localhost`
   - Porta: geralmente `3306` (MySQL) ou `5432` (PostgreSQL)

### 3️⃣ UPLOAD DOS ARQUIVOS

1. **Acesse cPanel → Gerenciador de Arquivos**
2. **Navegue até `public_html`** (ou subdiretório desejado)
3. **Faça upload de TODOS os arquivos**:
   - Mantenha a estrutura de pastas
   - Inclua todos os arquivos, inclusive os ocultos (.env, etc.)
4. **Extraia arquivos** se fez upload de um ZIP

### 4️⃣ INSTALAÇÃO DAS DEPENDÊNCIAS

**Opção A - Via Terminal SSH (Recomendado):**
```bash
# Navegue até a pasta do projeto
cd public_html/whatsboot  # ajuste o caminho conforme necessário

# Instale as dependências
npm install

# Execute o script de configuração
node setup.js
```

**Opção B - Via cPanel Terminal (se disponível):**
1. Acesse cPanel → Terminal
2. Execute os comandos acima

**Opção C - Contate seu provedor:**
- Se não tem acesso ao terminal, contate o suporte da hospedagem
- Solicite que executem `npm install` na pasta do projeto

### 5️⃣ EXECUÇÃO DO SCRIPT DE CONFIGURAÇÃO

```bash
node setup.js
```

Este script irá:
- ✅ Verificar as configurações
- ✅ Conectar ao banco de dados
- ✅ Criar todas as tabelas necessárias
- ✅ Criar o usuário administrador
- ✅ Inserir dados iniciais
- ✅ Criar diretórios de upload

### 6️⃣ CONFIGURAÇÃO DO DOMÍNIO

1. **Acesse cPanel → Subdomínios ou Domínios Addon**
2. **Configure para apontar para a pasta do projeto**
3. **Ou configure como aplicação Node.js** (se disponível no seu cPanel)

### 7️⃣ INICIALIZAÇÃO DO SERVIDOR

**Para cPanel com suporte Node.js:**
```bash
# Inicie o servidor
npm start
# ou
node server/index.js
```

**Para cPanel tradicional:**
- Configure como aplicação Node.js no painel
- Defina o arquivo de entrada: `server/index.js`
- Porta: deixe automático ou use a padrão do provedor

---

## 🔧 CONFIGURAÇÕES AVANÇADAS

### Configuração de Upload de Arquivos

1. **Verifique permissões da pasta `uploads/`**:
   ```bash
   chmod 755 uploads/
   chmod 755 uploads/videos/
   chmod 755 uploads/files/
   chmod 755 uploads/images/
   ```

### Configuração de SSL

1. **Ative SSL no cPanel**
2. **Atualize a URL no config**:
   ```javascript
   SITE_URL: 'https://seudominio.com',  // com HTTPS
   ```

### Backup Automático

O sistema possui backup automático configurado. Para personalizar:
```javascript
BACKUP_INTERVAL: 7,  // backup a cada 7 dias
```

---

## 🎯 PRIMEIRO ACESSO

### Painel Administrativo

1. **Acesse**: `https://seudominio.com/admin`
2. **Login**:
   - Usuário: `WhatsBoot` (ou o que configurou)
   - Senha: `15353621` (ou a que configurou)

### Dashboard do Usuário

1. **Acesse**: `https://seudominio.com/dashboard`
2. **Será necessário aprovação de membros**

---

## 🐛 SOLUÇÃO DE PROBLEMAS

### Erro: "Cannot find module"
```bash
# Execute na pasta do projeto:
npm install
```

### Erro: "Database connection failed"
- ✅ Verifique as credenciais no `config/database.config.js`
- ✅ Confirme que o banco existe no cPanel
- ✅ Teste a conexão com o banco

### Erro: "Permission denied"
```bash
# Ajuste permissões:
chmod 755 uploads/
chmod 644 config/database.config.js
```

### Site não carrega
- ✅ Verifique se Node.js está habilitado
- ✅ Confirme a configuração de domínio
- ✅ Verifique logs de erro no cPanel

### Upload de arquivos falha
- ✅ Verifique permissões da pasta uploads/
- ✅ Confirme limite de upload no PHP.ini
- ✅ Ajuste MAX_FILE_SIZE no config

---

## 📞 SUPORTE

### Logs do Sistema
```bash
# Ver logs em tempo real:
tail -f logs/app.log

# Ver erros:
tail -f logs/error.log
```

### Comandos Úteis
```bash
# Reiniciar aplicação:
npm restart

# Verificar status:
npm run status

# Backup manual:
npm run backup

# Limpar cache:
npm run clean
```

### Informações de Contato
- 📧 Email: suporte@whatsboot.com
- 💬 WhatsApp: +55 11 99999-9999
- 🌐 Site: https://whatsboot.com

---

## 🔒 SEGURANÇA

### Recomendações Importantes:

1. **Altere senhas padrão** imediatamente
2. **Configure SSL** (HTTPS)
3. **Mantenha backups regulares**
4. **Atualize dependências** periodicamente:
   ```bash
   npm update
   ```
5. **Configure firewall** se possível
6. **Monitore logs** regularmente

### Arquivos Sensíveis:
- `config/database.config.js` - Nunca compartilhe
- `.env` - Mantenha privado
- `uploads/` - Configure permissões adequadas

---

## 📈 OTIMIZAÇÃO DE PERFORMANCE

### Para Sites com Muito Tráfego:

1. **Configure compressão**:
   ```javascript
   ENABLE_COMPRESSION: true,
   ```

2. **Ajuste cache**:
   ```javascript
   STATIC_CACHE_TIME: 24,  // 24 horas
   ```

3. **Monitore recursos**:
   - CPU e memória no cPanel
   - Conexões simultâneas
   - Tamanho do banco de dados

4. **Configure CDN** se necessário

---

## ✅ CHECKLIST FINAL

- [ ] Banco de dados criado e configurado
- [ ] Arquivo `config/database.config.js` editado
- [ ] Todos os arquivos enviados para o servidor
- [ ] Dependências instaladas (`npm install`)
- [ ] Script de configuração executado (`node setup.js`)
- [ ] Domínio configurado corretamente
- [ ] SSL ativado (recomendado)
- [ ] Primeiro login no admin realizado
- [ ] Upload de arquivos testado
- [ ] Backup configurado
- [ ] Senhas alteradas (se necessário)

---

🎉 **Parabéns! Seu WhatsBoot está pronto para uso!**