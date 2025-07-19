# Documentação de Instalação da Aplicação Velvox (Node.js + React + Vite)

Esta documentação cobre:

* Instalação local no **Windows**
* Instalação local em **Linux (Ubuntu/Debian)**
* Instalação em **VPS Linux com domínio personalizado** (NGINX + PM2)

---

## 🌐 1. Instalação local no Windows

### Requisitos:

* Node.js instalado ([https://nodejs.org](https://nodejs.org))
* Git instalado ([https://git-scm.com](https://git-scm.com))
* Terminal PowerShell habilitado para scripts:

### Habilitar execução de scripts no PowerShell (caso dê erro):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Selecione **\[S] Sim** se for solicitado.

### Instalação:

```powershell
cd C:\Users\SeuUsuario\Desktop\velvox-web
npm install
npm run dev
```

A aplicação será iniciada em: [http://localhost:5173](http://localhost:5173)

---

## 🧵 2. Instalação local no Linux (Ubuntu/Debian)

### Requisitos:

* Node.js (v18 ou superior)
* Git

### Passos:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git curl -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone o projeto
cd ~
git clone https://github.com/seuusuario/velvox-web.git
cd velvox-web

# Instale dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
```

Acesse em [http://localhost:5173](http://localhost:5173)

---

## 🏠 3. Instalação em VPS com Domínio (Linux + NGINX + PM2)

### Requisitos:

* VPS Ubuntu 22.04
* Domínio já configurado com DNS apontando para o IP da VPS

### 1. Instale as dependências:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git curl nginx -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
npm install -g pm2
```

### 2. Clone o projeto e instale:

```bash
cd /var/www
sudo git clone https://github.com/seuusuario/velvox-web.git
cd velvox-web
sudo npm install
```

### 3. Build da aplicação (modo produção):

```bash
npm run build
```

### 4. Sirva com PM2:

```bash
pm2 serve dist 5173 --name velvox
pm2 save
pm2 startup
# Execute o comando que o PM2 exibir (ex: sudo env PATH=...)
```

### 5. Configure o NGINX:

```bash
sudo nano /etc/nginx/sites-available/velvox
```

Coloque o seguinte:

```nginx
server {
    listen 80;
    server_name www.seudominio.com.br;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Ative o site e reinicie:

```bash
sudo ln -s /etc/nginx/sites-available/velvox /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. (Opcional) Instale SSL com Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d www.seudominio.com.br
```

---

## 🪜 PM2: Garantindo que a aplicação volte após reboot

Se você usou `pm2 serve` ou `pm2 start`, faça:

```bash
pm2 save
pm2 startup
# Execute o comando extra que o PM2 exibir
```

Assim, ao reiniciar a VPS, a aplicação voltará automaticamente.

---

## 📅 Conclusão

* Local: use `npm run dev`
* VPS com domínio: use PM2 + NGINX
* HTTPS: use Certbot para SSL
* Reinício da VPS? PM2 mantém tudo no ar automaticamente

Se quiser hospedar com subdomínio (ex: `app.seudominio.com.br`), é só repetir a configuração do NGINX alterando o `server_name`.

Pronto! Sua aplicação está documentada para qualquer cenário.
