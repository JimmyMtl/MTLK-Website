
FROM nginx
RUN apt-get update && apt-get install -y \
    certbot \
    python3-certbot-nginx \
&& rm -rf /var/lib/lists/*
COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
RUN certbot certonly --nginx --non-interactive --agree-tos --email contact@mtlk.fr -d mtlk.fr --debug

#RUN snap --version
#RUN snap install core
#RUN snap refresh core
#RUN dnf remove certbot
#RUN snap install --classic certbot
#RUN certbot certonly --nginx -d www.mtlk.fr
#RUN ls


