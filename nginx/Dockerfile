FROM nginx
#RUN apt-get update && apt-get install -y \
#    openssl \
#    python3-certbot-nginx \
#    certbot \
#&& rm -rf /var/lib/lists/*

#RUN #openssl req -x509 -nodes -newkey rsa:4096 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt -days 365 -subj "/CN=www.mtlk.fr"

COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
COPY ./certificate.crt /etc/ssl/certs/certificate.crt
COPY ./certificate.key /etc/ssl/private/certificate.key
# SOURCE
#https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-debian-11
# Method
# Générer un certificat qui va sans doute être ko avec openssl
# Une fois le serveur en route. Se connecter au docker nginx et générer un
# certificat avec certbot
# Copier la clé et le certificat et les mettre dans le dossier nginx du repo
# La suite est dans l'histoire

