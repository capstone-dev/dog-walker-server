#!/bin/bash
kill -9 $(ps -ef | grep /home/ubuntu/deploy/dog-walker-server2/bin/www | grep -v grep | awk '{print $2}')
