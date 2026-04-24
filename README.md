# virginia

## Syncing node_modules to the Host

The named volume keeps the container's node_modules separate. To get them on the host for IDE autocomplete, you have to
copy from the container after build:

 ```
 docker compose build
docker compose run --rm app sh -c "tar cf - node_modules" | tar xf -
docker compose up
 ```

This extracts the container's node_modules onto the host. Downside: you must re-run it whenever dependencies change.