FROM nginx
RUN apt-get update && apt-get install -y \
    openssl \
#    python3-certbot-nginx \
&& rm -rf /var/lib/lists/* 

RUN openssl req -x509 -nodes -newkey rsa:4096 -keyout /etc/ssl/private/nginx-selfsigned.key -out tc/ssl/certs/nginx-selfsigned.crt -days 365 -subj '/CN=mtlk.fr'

COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
#RUN certbot certonly --nginx --non-interactive --agree-tos --email contact@mtlk.fr -d mtlk.fr --debug

#RUN ls


