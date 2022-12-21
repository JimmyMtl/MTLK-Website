FROM nginx
COPY ./defaultProd.conf /etc/nginx/conf.d/default.conf
RUN apt-get install openssl;
#RUN openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=MTLK/CN=mtlk.fr" -addext "subjectAltName=DNS:mtlk.fr" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt;
RUN openssl req \
        -newkey rsa:2048 \
        -x509 \
        -nodes \
        -keyout server.key \
        -new \
        -out server.crt \
        -subj /CN=mtlk.fr \
        -reqexts SAN \
        -extensions SAN \
        -config <(cat /System/Library/OpenSSL/openssl.cnf ; printf '[SAN]\nsubjectAltName=DNS:mtlk.fr') \
        -sha256 \
        -days 3650 \
        -keyout /etc/ssl/private/nginx-selfsigned.key \
        -out /etc/ssl/certs/nginx-selfsigned.crt