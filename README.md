# js-image-downloader
Script to download images from google images


## Install node modules
```
npm install
```
## Choose what to download
downloadImages.js, line 21 :
```
const results = await google.scrape('what google image search you want to download', 1000)
```

## Choose where to put download images
line 29 :
```
dest : '/path/to/download'
```

## Run script
```
node downloadImages.js
```
