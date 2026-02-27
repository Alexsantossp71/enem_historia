#!/bin/bash
# ============================================================
# Script para configurar acesso ao GitHub e fazer deploy
# Execute este script em um terminal com acesso root/sudo
# ============================================================

echo "=== Configurando acesso ao GitHub ==="

# 1. Gerar chave SSH
echo ""
echo "1. Gerando chave SSH..."
mkdir -p ~/.ssh
chmod 700 ~/.ssh
ssh-keygen -t ed25519 -C "historia_enem" -f ~/.ssh/id_ed25519 -N ""

# 2. Mostrar a chave pública
echo ""
echo "=============================================="
echo "   COPIE ESTA CHAVE E ADICIONE NO GITHUB:"
echo "=============================================="
echo ""
echo "1. Acesse: https://github.com/settings/ssh/new"
echo "2. Title: historia_enem_server"
echo "3. Cole a chave abaixo:"
echo ""
echo "--- INICIO DA CHAVE ---"
cat ~/.ssh/id_ed25519.pub
echo "--- FIM DA CHAVE ---"
echo ""

# 3. Configurar git
echo "3. Configurando git..."
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519 2>/dev/null

# 4. Testar conexão
echo ""
echo "4. Testando conexão com GitHub..."
echo "   (pressione 'yes' se pedir confirmação)"
ssh -T git@github.com 2>&1 || true

# 5. Fazer push
echo ""
echo "5. Fazendo push..."
cd /home/z/my-project
git remote set-url origin git@github.com:Alexsantossp71/historia_enem.git
git push origin main

echo ""
echo "=============================================="
echo "   DEPLOY CONCLUÍDO!"
echo "=============================================="
echo ""
echo "Site: https://alexsantossp71.github.io/historia_enem/"
echo ""
