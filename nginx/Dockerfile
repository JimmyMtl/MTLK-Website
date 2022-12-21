FROM nginx
#RUN apt-get update && apt-get install -y \
#    openssl \
#    python3-certbot-nginx \
#    certbot \
#&& rm -rf /var/lib/lists/*

COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
COPY ./certificate.crt /etc/ssl/certs/certificate.crt
COPY ./certificate.key /etc/ssl/private/certificate.key
# SOURCE
#https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-debian-11