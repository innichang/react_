# /public VS /src/assets

### public folders
Files inside the public folder can be referenced directly from `index.html` or `index.css`.

The reason for that is because images or any general files stored in `public/` are made PUBLICLY AVAILABLE by the underlying project development server & build process. 

Just like `index.html` file, those files can directly be visited from inside the browser and can therefore also be requested by other files.

### the src/assets folder
Images/files can be stored inside the src/ folder.

Any files stored in `src` or any subfolders inside `src, are NOT MADE AVAILABLE TO THE PUBLIC.

Files inside `src/` can be used in the code files. 

They must be imported into code files, and then picked up by the underlying build process, potentially optimized, and kind of "injected" into the `public/` folder right before serving the website.

### So which folder to use?
`public/` should be used for any images that should NOT be handled by the build process, and should be generally available. Some examples are images used directly in the `index.html` or favicons.

`src/` should be used for files that are used inside of components.
