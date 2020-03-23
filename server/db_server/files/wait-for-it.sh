#!/bin/sh
# wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"

until PGPASSWORD="0910shc" psql -h "$host" -U "postgres" -c '\q'; do
  >&2 echo "Postgres on $host is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd