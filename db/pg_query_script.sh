#/bin/bash

#!/bin/bash

if [ "$#" -ne 1 ]; then
        echo "Usage: $0 <file_path>"
            exit 1
            fi

if [ ! -f "$1" ]; then
        echo "Error: File '$1' not found or is not a regular file."
            exit 1
            fi

PGPASSWORD=web1pass psql -h localhost -p 5432 -U web1user -d web1 -a -f $1 

