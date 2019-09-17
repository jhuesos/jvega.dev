# Process images script

This NodeJS script will process all images inside the subfolder `to-process`
and output the results under `PROJECT_ROOT/static/images`. This two routes are
hardcoded as this script is not intended to be re-usable across projects (yet?).

Images added to the process folders must have the `.jpg` extension and you can
add one or more at the same time.

Each image will be resized to `200px`, `300px`, `400px` and `600px` wide and
saved in `jpeg` and `webp` format.

## To run the script

    node index.js
