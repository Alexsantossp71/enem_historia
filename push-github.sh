#!/bin/bash
# ============================================================
# Script para fazer push ao GitHub
# Execute após adicionar a chave SSH no GitHub
# ============================================================

echo "=== Fazendo push para GitHub ==="

cd /home/z/my-project

# Configurar remote SSH
git remote set-url origin git@github.com:Alexsantossp71/historia_enem.git

# Testar conexão SSH
echo "Testando conexão SSH..."
ssh -T git@github.com 2>&1 || true

# Fazer push
echo ""
echo "Enviando commits..."
git push origin main

echo ""
echo "=== CONCLUÍDO! ==="
echo "Site: https://alexsantossp71.github.io/historia_enem/"
