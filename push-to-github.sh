#!/bin/bash

echo "🚀 Push vers GitHub - LÉO EP Landing Page"
echo ""
echo "⚠️  Vous allez avoir besoin d'un Personal Access Token (PAT) de GitHub"
echo ""
echo "Si vous n'en avez pas encore :"
echo "1. Allez sur : https://github.com/settings/tokens"
echo "2. Cliquez sur 'Generate new token' → 'Classic'"
echo "3. Cochez 'repo' (accès complet aux repositories)"
echo "4. Générez et copiez le token"
echo ""
read -p "Avez-vous votre token ? (o/n) : " has_token

if [ "$has_token" != "o" ] && [ "$has_token" != "O" ]; then
    echo ""
    echo "❌ Créez d'abord un token sur : https://github.com/settings/tokens"
    echo "Puis relancez ce script."
    exit 1
fi

echo ""
read -p "Collez votre token GitHub : " github_token

if [ -z "$github_token" ]; then
    echo "❌ Token vide. Abandon."
    exit 1
fi

echo ""
echo "🔄 Configuration du remote avec le token..."
git remote set-url origin "https://${github_token}@github.com/gregorybusson-lab/leo.git"

echo "📤 Push vers GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Succès ! Votre code est maintenant sur GitHub !"
    echo "🔗 https://github.com/gregorybusson-lab/leo"
    echo ""
    echo "🔒 Nettoyage du token (sécurité)..."
    git remote set-url origin "https://github.com/gregorybusson-lab/leo.git"
    echo "✅ Token retiré de la config Git (sécurité)"
else
    echo ""
    echo "❌ Erreur lors du push. Vérifiez votre token."
    git remote set-url origin "https://github.com/gregorybusson-lab/leo.git"
fi
