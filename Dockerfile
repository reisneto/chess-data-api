FROM node:14.15-alpine

ENV HOME /home/node
ENV CODE ${HOME}/code

RUN mkdir -p ${CODE}

WORKDIR ${CODE}

CMD ["yarn", "start:dev"]