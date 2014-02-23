#!/usr/bin/env bash

# Install couchdb and start service.
apt-get update
apt-get install -y couchdb 

cp /vagrant/local.ini /etc/couchdb/local.ini

service couchdb start

# Install nodejs from PPA.
apt-get install -y python-software-properties

add-apt-repository -y ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs

cd /vagrant/www && npm install
cp /vagrant/nodejs.conf /etc/init/
start nodejs
