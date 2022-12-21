FROM nginx
RUN #apt-get update && apt-get install -y \
    openssl \
    python3-certbot-nginx \
&& rm -rf /var/lib/lists/* \
&& \
    openssl genrsa -des3 -passout pass:x -out server.pass.key 2048 && \
    openssl rsa -passin pass:x -in server.pass.key -out server.key && \
    rm server.pass.key && \
    openssl req -new -key server.key -out server.csr \
        -subj "/C=FR/ST=Lorraine/L=Nancy/O=MTLK/CN=mtlk.fr" && \
    openssl x509 -req -days 365 -in server.csr -signkey /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt

COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
#RUN certbot certonly --nginx --non-interactive --agree-tos --email contact@mtlk.fr -d mtlk.fr --debug

#RUN ls


