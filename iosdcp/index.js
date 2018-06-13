(async () => {
  const fs = require('fs');
  const cheerio = require('cheerio');
  const assert = require('assert')
  const axios = require('axios');
  const csv = require('fast-csv')
  
  var csvStream = csv.createWriteStream({delimiter: "\t"}),
    writableStream = fs.createWriteStream("my.csv");
  
  writableStream.on("finish", function(){
    console.log("DONE!");
  });
  csvStream.pipe(writableStream);
  
  
  async function fetchData(page=1) {
    console.log(`page: ${page}`)
    const response = await axios.get(`https://fortee.jp/iosdc-japan-2018/proposal?page=${page}`)
    assert(response.status === 200)
    const html = response.data;
    const $ = cheerio.load(html);
  
    const list = $('.list-proposal')
    list.each((i, proposal) => {
      const src = $(proposal).find('a').map((i, a)=>{  return $(a).text() })
      const title = src[0]
      const speaker = 'https://twitter.com/' + src[1]
      const url = 'https://fortee.jp' + $(proposal).find('a').attr('href')
      const body = $(proposal).find('.top40').text().trim().replace(/\n/g, ' ')
    
      csvStream.write({title, speaker, url, body});
    })
    
    return page < 9
  }
  
  let page = 1
  while (await fetchData(page)) {
    page++
  }
  
  csvStream.end();
})()
