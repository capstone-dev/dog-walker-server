#!/bin/bash
sh /home/ubuntu/deploy/stop.sh

echo "stop app server.."
sleep 1

sudo rm -rf /home/ubuntu/deploy/dog-walker-server2/
echo "remove app server module."
sleep 1

cd /home/ubuntu/deploy/
git clone https://github.com/capstone-dev/dog-walker-server2.git
echo "git clone app server module"
sleep 1

sh /home/ubuntu/deploy/start.sh
echo "start app server.."
sleep 1

echo "done..."
