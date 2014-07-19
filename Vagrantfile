# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise32"
  config.vm.network :forwarded_port, host: 5984, guest: 5984
  config.vm.network :forwarded_port, host: 3000, guest: 3000

  config.vm.provision :shell, :path => "bootstrap.sh"
end

