const Scraper = require('images-scraper')
//const url = require('url')
//const fs = require('fs')
const downloader = require('image-downloader')

// Image scraper settings
const google = new Scraper({
	puppeteer : {
		headless : false,
		tbs : {
			ic: 'gray'
		}
	}
});

// Array of url to download
const toDL = [];

// Get urls from google search
(async () => {
	const results = await google.scrape('dessin', 1000)
	for ( ele of results ) {
		toDL.push(ele.url)
		console.log('toDL : ' + toDL)
	}
	for ( ele of toDL ) {
		let options = {
			url : ele,
			dest : '/media/alaric/Shared_Disk/COURS/IMAC2/PTUT/download_images/images/'
		}
		console.log('download.image() : ' + ele)
		downloader.image(options)
			.then(({ filename }) => {
				console.log('Saved to ', filename)
			})
			.catch((err) => console.error(err))
	}
})();


//async function downloadImages(req, res) {
	//let query = url.parse(req, true).query;
    //let pic = query.image;
    //let id = query.id

    //let directory_name = "./images" + id + "/" + pic

    //let filename = fs.existsSync(directory_name);

    //if (filename) {
        ////read the image using fs and send the image content back in the response
        //fs.readFile(directory_name, function (err, content) {
            //if (err) {
                //res.writeHead(400, { 'Content-type': 'text/html' })
                //console.log(err);
                //res.end("No such image");
            //} else {
                ////specify the content type in the response will be an image
                //res.writeHead(200);
                //res.end(content);
            //}
        //});
    //} else {
        //logger.warn(error.NOT_FOUND)
        //return res.status(401).send(error.NOT_FOUND)
    //}
//}

