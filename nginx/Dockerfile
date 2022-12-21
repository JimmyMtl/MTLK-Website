FROM nginx
RUN #apt-get update && apt-get install -y \
    openssl \
    python3-certbot-nginx \
&& rm -rf /var/lib/lists/* \
&& \
    openssl x509 -subj "/C=FR/ST=Lorraine/L=Nancy/O=MTLK/CN=mtlk.fr" -req -days 365 -signkey /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt

COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
#RUN certbot certonly --nginx --non-interactive --agree-tos --email contact@mtlk.fr -d mtlk.fr --debug

#RUN ls


