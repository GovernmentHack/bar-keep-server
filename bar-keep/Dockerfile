ARG BUILD_FROM
FROM $BUILD_FROM

ENV LANG C.UTF-8
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN apk add --no-cache \
    nodejs \
    npm \
    git

COPY package.json /
COPY rootfs /
RUN cd / && npm install --build-from-source --unsafe-perm

RUN chmod a+x /run.sh

CMD [ "/run.sh" ]