Ouija config
============

TBD

Features
--------

Ouija hides TCP traffic in encrypted TCP/UDP traffic between relay and proxy servers

.. image:: https://raw.githubusercontent.com/neurophant/ouija-config/main/ouija.png
    :alt: TCP/UDP tunneling
    :width: 800

Requirements
------------

* Python 3.11+
* Ouija 1.2.3+

Prerequisites (Ubuntu)
----------------------

.. code-block:: bash

    sudo add-apt-repository ppa:deadsnakes/ppa
    sudo apt update
    sudo apt install python3.11-full
    sudo apt-get install supervisor

    cd /var
    git clone https://github.com/neurophant/ouija-config.git
    python3.11 -m venv .env
    source .env/bin/activate
    pip install ouija
    # edit your settings and secrets at /var/ouija-config/config/

Relay (Ubuntu)
--------------

.. code-block:: bash

    sudo cp conf/ouija-proxy.conf /etc/supervisor/conf.d/ouija-proxy.conf
    sudo cp conf/supervisord.conf /etc/supervisor/supervisord.conf
    sudo systemctl restart supervisor.service

Proxy (Ubuntu)
--------------

.. code-block:: bash

    sudo cp conf/ouija-proxy.conf /etc/supervisor/conf.d/ouija-proxy.conf
    sudo cp conf/supervisord.conf /etc/supervisor/supervisord.conf
    sudo systemctl restart supervisor.service
