#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
elif [ $# -lt 3 ]; then
	n=$#
elif [ $# -ge 3 ]; then
	n=3
fi
args=("$@")
for((i=0; i < n; i++)); do
	echo ${args[${i}]}
done