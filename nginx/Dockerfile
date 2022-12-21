FROM nginx as BUILD
RUN apt-get update && apt-get install -y \
    python3-certbot-nginx \
#&& rm -rf /var/lib/lists/*
#RUN certbot certonly --nginx -d www.mtlk.fr
RUN certbot --nginx --non-interactive --agree-tos --email contact@mtlk.fr -d www.mtlk.fr

FROM nginx
COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
COPY --from=BUILD /etc/letsencrypt /etc/letsencrypt
#RUN snap --version
RUN #apt install snapd
#RUN snap install core
#RUN snap refresh core
#RUN dnf remove certbot
#RUN snap install --classic certbot
#RUN certbot certonly --nginx -d www.mtlk.fr
#RUN ls


