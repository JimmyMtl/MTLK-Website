FROM nginx
COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
RUN apt install snapd
RUN snap install core
RUN snap refresh core
RUN dnf remove certbot
RUN snap install --classic certbot
RUN certbot certonly --nginx -d www.mtlk.fr
RUN ls
RUN #apt-get install openssl;
#RUN openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=MTLK/CN=mtlk.fr" -addext "subjectAltName=DNS:mtlk.fr" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt;
RUN #openssl req  -newkey rsa:2048  -x509 -nodes  -new  -subj "/C=EU/CN=www.mtlk.fr" -addext "subjectAltName=DNS:mtlk.fr" -sha256  -days 3650  -keyout /etc/ssl/private/nginx-selfsigned.key  -out /etc/ssl/certs/nginx-selfsigned.crt;