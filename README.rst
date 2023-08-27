Ouija config
============

Relay and proxy setup configuration with supervisord for `Ouija <https://github.com/neurophant/ouija>`_

Features
--------

* Easy to install, configure and use
* TCP/UDP tunneling
* Pluggable traffic ciphers
* Pluggable traffic entropy control

Ouija hides TCP traffic in encrypted TCP/UDP tunnel between relay and proxy servers

.. image:: https://raw.githubusercontent.com/neurophant/ouija-config/main/ouija.png
    :alt: TCP/UDP tunneling
    :width: 800

Requirements
------------

* Python 3.11+
* Ouija 1.3.1+

Install prerequisites (Ubuntu)
------------------------------

.. code-block:: bash

    sudo add-apt-repository ppa:deadsnakes/ppa
    sudo apt update
    sudo apt install python3.11-full
    sudo apt-get install supervisor

    cd /var
    git clone https://github.com/neurophant/ouija-config.git
    cd ouija-config
    python3.11 -m venv .env
    source .env/bin/activate
    pip install ouija
    # edit your settings and secrets at /var/ouija-config/config/
    sudo cp supervisor/supervisord.conf /etc/supervisor/supervisord.conf

Install as relay (Ubuntu)
-------------------------

.. code-block:: bash

    sudo cp supervisor/ouija-relay.conf /etc/supervisor/conf.d/ouija-relay.conf
    sudo systemctl restart supervisor.service

Install as proxy (Ubuntu)
-------------------------

.. code-block:: bash

    sudo cp supervisor/ouija-proxy.conf /etc/supervisor/conf.d/ouija-proxy.conf
    sudo systemctl restart supervisor.service

Install nginx PAC to relay (Ubuntu)
-----------------------------------

.. code-block:: bash

    sudo apt update
    sudo apt install nginx
    mkdir /var/www
    cp nginx/nginx.conf /etc/nginx/nginx.conf
    cp nginx/proxy.pac /var/www/proxy.pac
    sudo systemctl restart nginx
